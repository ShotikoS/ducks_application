const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { dirname } = require("path");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const api = require('./API/api')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(jsonParser);
app.use(urlencodedParser);

app.use("/", api.addApplication);
app.use("/", api.getApplication);
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
