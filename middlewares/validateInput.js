const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;

module.exports = (req, res, next) => {
  const { userName, email, password, repeatPassword } = req.body;
  console.log(email);
  try {
    if (!userName) {
      throw new Error('USERNAME_KEY_ERROR');
    }

    if (!email) {
      throw new Error('EMAIL_KEY_ERROR');
    }

    if (!password) {
      throw new Error('PASSWORD_KEY_ERROR');
    }

    if (!repeatPassword) {
      throw new Error('REPEAT_PASSWORD_KEY_ERROR');
    }

    if (!emailRegex.test(email)) {
      throw new Error('EMAIL_INVALID');
    }

    if (!passwordRegex.test(password)) {
      throw new Error('PASSWORD_INVALID');
    }

    if (!(password === repeatPassword)) {
      throw new Error('PASSWORD_INCORRECT');
    }

    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
