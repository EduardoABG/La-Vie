const express = require("express");

const routes = require("./routes");
const db = require("./database");
//const handleError = require("./middlewares/handleError");
<<<<<<< HEAD
=======
const authMiddleware = require("./middlewares/auth");
const jwtMiddleware = require("./middlewares/jwt");
>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
=======
app.use(jwtMiddleware.unless({path: ["/", "/auth/signin", "/auth/register"]}));
app.use(authMiddleware);

>>>>>>> 0d2d58bdae89aeb5d1aae0bbe52a97c08bcf2a4b
app.use(routes);
//app.use(handleError);
app.use((req, res) => {
  res.status(404).json({ message: "URL not found" });
});

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});