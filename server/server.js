import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./database.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8800, () => {
  console.log("server listening on port 8800");
});

app.get("/", (req, res) => {
  res.json("this is the backend");
});

app.get("/client-search", async (req, res) => {
  const client = req.query.clientSearch;
  const q =
    "SELECT * FROM Customer WHERE first_name = ? OR last_name = ? OR phone_num = ? OR email_addr = ?";
  await db.query(q, [client, client, client, client], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

app.post("/post-client-info", (req, res) => {
  try {
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const number = req.body.number;
    const email = req.body.email;

    const searchQuery =
      "SELECT * FROM Customer WHERE first_name = ? AND last_name = ? AND phone_num = ? AND email_addr = ?";
    const insertQuery =
      "INSERT INTO Customer (first_name, last_name, phone_num, email_addr) VALUES (?,?,?,?)";

    db.query(searchQuery, [fName, lName, number, email], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      if (results.length === 0) {
        //checks to see if there is already an existing record
        db.query(insertQuery, [fName, lName, number, email], (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          return res.status(200).send("Data Inserted Correctly: ");
        });
      } else {
        return res.status(298).send("Customer Already Exists");
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
});

app.post("/csv-upload", async (req, res) => {
  let responseData = [];
  try {
    const csvData = req.body;
    const searchQuery =
      "SELECT * FROM Customer WHERE first_name = ? AND last_name = ? AND phone_num = ? AND email_addr = ?";
    const insertQuery =
      "INSERT INTO Customer (first_name, last_name, phone_num, email_addr) VALUES (?,?,?,?)";

    const queryPromises = [];
    for (const row of csvData) {
      const fName = row["Customer Name"].split(" ")[0];
      const lName = row["Customer Name"].split(" ")[1] || ""; //should get the last element (change)
      const number = row["Phone"];
      const email = row["Email"];
      //   console.log(fName + " || " + lName + " || " + number + " || " + email);

      const promise = new Promise((resolve, reject) => {
        db.query(searchQuery, [fName, lName, number, email], (err, results) => {
          if (err) {
            console.error("Error Searching Row:", err);
            // Add appropriate error handling here
            responseData.push({
              error: true,
              message: "Error Searching Row: " + err.message,
            });
            reject(err);
          }
          //   console.log(results);
          else if (results.length === 0) {
            //checks to see if there is already an existing record
            db.query(insertQuery, [fName, lName, number, email], (err) => {
              if (err) {
                console.error("Error Inserting Row:", err);
                responseData.push({
                  error: true,
                  message: "Error Inserting Row: " + err.message,
                });
                reject(err);
              } else {
                responseData.push({
                  firstName: fName,
                  lastName: lName,
                  phone: number,
                  email: email,
                  success: true,
                  message: "Successfully Added Entry",
                });
                resolve();
              }
            });
          } else {
            responseData.push({
              firstName: fName,
              lastName: lName,
              phone: number,
              email: email,
              success: false,
              message: "Duplicate Entry Found",
            });
            resolve();
          }
        });
      });
      queryPromises.push(promise);
    }
    await Promise.all(queryPromises);

    res.status(200).send(responseData);
  } catch (err) {
    console.error(err);
    responseData.push({
      error: false,
      message: "Error Processing File",
    });
    res.status(500).send(responseData);
  }
});
