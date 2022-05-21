const HomeController = {
  index: (req, res) => {
    res.json({ message: "La Vie API", version: "1.0.0" });
  },
};

module.exports = HomeController;
