const makeHash = require('../utils/makeHash');
const userDao = require('../models/user/userDao');

async function signUp({ userName, email, password, requiredAgree }) {
  const hashedPassword = await makeHash(password);
  const userInfo = {
    userName,
    email,
    password: hashedPassword,
    requiredAgree,
  };
  const createUser = await userDao.signUp(userInfo);
  return createUser;
}

module.exports = {
  signUp,
};
