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
        alert("Error Processing File");
      });
  };

  let successCount = 0, dupCount = 0, errorCount = 0;
  results.forEach((data) => {
    if(data.error) errorCount++;
    else {
      if(data.success) successCount++;
      else dupCount++;
    }
  })

  return (
    <div>
      <h1>Database Import</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <br /> <br />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <br />
      <div>
        {
          results.length !== 0 && (
          <div> 
            <p style={{color: 'green'}}>Successful Entries: {successCount}</p>
            <p style={{color: 'orange'}}>Duplicate Entries: {dupCount}</p>
            <p style={{color: 'red'}}>Errors: {errorCount}</p>
          </div>
          )
        }
      </div>
    </div>
  );
};
