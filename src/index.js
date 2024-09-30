require("dotenv/config");
const express = require("express");
const { connect } = require("./db/init");
const app = express();
const PORT = process.env.PORT || 3000;
//comment
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is started on https://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
