module.exports = {
  get: (req, res) => {
    res.status(200).send({
      name: "Fridge",
      value: "2000R$",
    });
  },
};
