import React, { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

export const FileUpload = () => {
  const [fileData, setFileData] = useState([]);
  const [results, setResults] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    Papa.parse(selectedFile, {
      header: true,
      complete: (result) => {
        setFileData(result.data);
      },
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!fileData) return;

    await axios
      .post("/csv-upload", fileData)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log("Error Uploading File: ", err);
      });
  };

  return (
    <div>
      <h1>Database Import</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <br /> <br />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <br />
      <div>
        {results.map((data, index) => (
          <div key={index}>
            {data.success !== undefined ? (
              <p style={{ color: data.success ? "green" : "red" }}>
                {data.firstName} {data.lastName}, Phone: {data.phone}, Email:{" "}
                {data.email}, {data.message}
              </p>
            ) : data.error ? (
              <p style={{ color: "red" }}>{data.message}</p>
            ) : (
              <p>{data.message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
