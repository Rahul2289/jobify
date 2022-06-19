const register = (req, res) => {
  res.send("register user");
};

const login = () => {
  res.send("login user");
};
const updateUser = (req, res) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
