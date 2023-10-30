class UserController {
  async createUser(req, res) {
    const { login, password } = req.body;
    console.log(login, password);
    res.json("ok");
  }
  async getUser(req, res) {}
  async deleteUser(req, res) {}
}

export default UserController;
