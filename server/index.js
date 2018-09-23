const express = require("express");
require("dotenv").config();
const app = express();
const router = express.Router();

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