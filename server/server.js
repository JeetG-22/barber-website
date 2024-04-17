import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8800, () => {
    console.log("server listening on port 8800");
});

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"willman",
    database: "willman_project",
    connectionLimit: 10
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