const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const app = express();
const router = express.Router();

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
};

app.use(helmet());
app.use(cors(corsOptions));

const PORT = process.env.SERVER_PORT;
require("./routes/todos")(router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);


function errorHandler (err, req, res, next) { /*eslint-disable-line no-unused-vars*/
  res.json({ "error": true,  message: err });
}

app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`Server running on PORT:${PORT}`); /*eslint-disable-line no-console*/
});

module.exports = router;