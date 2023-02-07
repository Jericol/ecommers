const AuthServices = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(200).json({ message: "user created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const {email, password } = req.body;
    if (!email) {
      res.status(200).json({
        error: "Missing data",
        message: "Not email provided"
      });
    }
    if (!password) {
      res.status(200).json({
        error: "Missing data",
        message: "Not password provided"
      });
    }

    const result = await AuthServices.login({email, password});
    //  console.log(result)
    if (result.isValid) {
      const {username, id, email} = result.user;
      const userData = { username, id, email};
      const token =  AuthServices.genToken(userData);
      result.user.token = token;
      res.json(result.user)
    }
  } catch (error) {
    res.status(400).json({message: "something wrong"});
  }
};

module.exports = {
  register,
  login,
};
