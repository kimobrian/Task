module.exports = {
  /**
   * List all tasks
   * @param {object} req Request Object
   * @param {object} res Response Object
   */
  list(req, res) {
    return res.json({ "message": "List all Tasks" });
  },
  /**
   * Create a new task
   * @param {object} req Request Object
   * @param {object} res Response Object
   */
  create(req, res) {
    return res.json({ "message": "Create a new task" });
  },
  /**
   * Update an existing task
   * @param {object} req 
   * @param {object} res 
   */
  update(req, res) {
    return res.json({ "message": "Edit a task" });
  },
  /**
   * Delete a task
   * @param {object} req 
   * @param {object} res 
   */
  delete(req, res) {
    return res.json({ "message": "Delete a Tasks" });
  }
};