const path = require("path");
const express = require("express");

const DIST_DIR = path.join(__dirname, "build");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});