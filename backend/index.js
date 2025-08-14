const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();


app.use(cors({
  origin: ["http://localhost:5173", "https://campusspay.netlify.app"],
  credentials: true
}));

app.use(express.json());

app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
  res.send("API Root");
});

app.listen(3000);