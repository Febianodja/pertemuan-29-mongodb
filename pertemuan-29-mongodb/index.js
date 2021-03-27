const express = require("express");
const cors = require("cors");
const app = express();

const { PORT, MONGODB_LIVE, dbConfigMongo } = require("./config");
const localPort = process.env.PORT || 3000;

const studentRouter = require("./routes/StudentController")
// console.log(studentRouter)

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

app.use(studentRouter)

if (dbConfigMongo) {
  app.listen(localPort, () => {
    console.log("server running on port", PORT);
    console.log('konek mongo')
  });
} else {
  console.log("belum konek db mongo");
}
