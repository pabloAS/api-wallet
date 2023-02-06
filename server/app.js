const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));
app.use(
  express.json({ limit: "50mb", type: ["application/json", "text/plain"] })
);
const payment = require("./routes/payment.routes");
app.use("/payment", payment);
module.exports = app;
