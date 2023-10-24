const User = require('./user');

async function signUp(userInfo) {
  const user = await User.findOne({ email: userInfo.email });

  if (!user) {
    throw new Error('REGISTERED_USER');
  }

  const createUser = await User.create(userInfo);

  return createUser;
}

module.exports = {
  signUp,
};
