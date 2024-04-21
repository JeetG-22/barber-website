import mysql from "mysql";

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"willman",
    database: "willman_project",
    connectionLimit: 10
});

export default db;