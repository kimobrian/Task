const todosController = require("../controllers/todos");

module.exports = (router) => {
  // Todos routes
  router.get("/", todosController.list),
  router.post("/", todosController.create),
  router.put("/:task_id", todosController.update),
  router.delete("/:task_id", todosController.delete),
  router.use("*", (req, res, next) => {
    res.status(404);
    next({ "message": "Route not found" });
  });
};