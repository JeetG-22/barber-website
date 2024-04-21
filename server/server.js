import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./database.js"

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8800, () => {
    console.log("server listening on port 8800");
});

app.get("/", (req, res) => {
    res.json("this is the backend")
});

app.get("/client-search", (req, res) => {
    const client = req.query.clientSearch;
    const q = "SELECT * FROM Customer WHERE first_name = ? OR last_name = ? OR phone_num = ? OR email_addr = ?";
    db.query(q, [client, client, client, client], (err, data) => {
        if(err) return res.send("" + err);
        return res.send(data);
    })
})

app.post("/post-client-info", (req, res) => {
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const number = req.body.number;
    const email = req.body.email;
    console.log(email);

    const q = "INSERT INTO Customer (first_name, last_name, phone_num, email_addr) VALUES (?,?,?,?)"
    db.query(q, [fName, lName, number, email], (err, data) => {
        if(err) return res.send(err);
        return res.send(data);
    })
})