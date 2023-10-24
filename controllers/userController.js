const useService = require('../services/userService');

async function signUp(req, res) {
  const { userName, email, password, requiredAgree } = req.body;
  const userInfo = {
    userName,
    email,
    password,
    requiredAgree,
  };
  try {
    const createUser = await useService.signUp(userInfo);
    res.status(201).json(createUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { signUp };
