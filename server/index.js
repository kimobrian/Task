const express = require("express");
require("dotenv").config();
const app = express();
const router = express.Router();

const PORT = process.env.SERVER_PORT;
router.get("/", (req, res) => {
  res.json({ "message": "Welcome to our Todo App" });
});

app.use("/", router);

app.listen(PORT, ()=> {
  console.log(`Server running on PORT:${PORT}`); /*eslint-disable-line no-console*/
});

module.exports = router;