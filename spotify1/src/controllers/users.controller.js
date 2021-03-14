module.exports = {
  get: (req, res) => {
    res.status(200).send("Auth user");
  },
  post: (req, res) => {
    res.status(200).send("Create user");
  },
  put: (req, res) => {
    res.status(200).send("Modifying user");
  },
};
