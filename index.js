const express = require("express");
const path = require("path");
const app = express();
const port = 8901;

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the specific page with the button
app.get("/noc/Ecertificate", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to serve the file for download
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "example.pdf");
  res.download(filePath); // The file will be downloaded
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
