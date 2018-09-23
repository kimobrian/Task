const Task = require("../models").Task;

module.exports = {
  /**
   * List all tasks
   * @param {object} req 
   * @param {object} res 
   */
  list(req, res, next) {
    return Task.findAll().then(tasks=> {
      return res.json(tasks);
    }).catch(err=>{
      res.status(500);
      next(err);
    });
  },
  /**
   * Create a new task
   * @param {object} req 
   * @param {object} res 
   */
  create(req, res, next) {
    // return res.json({ "message": "Create a new task" });
    if(req.body.name) {
      return Task.create({
        name: req.body.name
      }).then(task=> {
        return res.json(task);
      }).catch(err=>{
        res.status(500);
        next(err);
      });
    } else {
      res.status(400);
      next("Please provide a task name");
    }
  },
  /**
   * Update an existing task
   * @param {object} req 
   * @param {object} res 
   */
  update(req, res, next) {
    if(req.params.task_id) {
      if(req.body.name) {
        return Task.update(req.body, {
          where: { id: req.params.task_id }
        }).then(()=> {
          return Task.findById(req.params.task_id).then(task=> {
            return res.json(task);
          });
        }).catch(err=>{
          res.status(500);
          next(err);
        });
      }
    } else {
      res.status(400);
      next("A task Id is required to update a task");
    }
  },
  /**
   * Delete a task
   * @param {object} req 
   * @param {object} res 
   */
  delete(req, res, next) {
    if(req.params.task_id) {
      return Task.destroy({
        where: { id: req.params.task_id }
      }).then(()=> {
        return res.json({ message: "Task deleted successfully" });
      });
    } else {
      res.status(400);
      next("A task Id is required to delete a task");
    }
  }
};