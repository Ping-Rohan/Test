const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const { Products } = require("./models");

const partialsPath = path.join(__dirname, "views/partials");

const db = require("./models");
const productRoutes = require("./routes/productsRoutes");
const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(__dirname + "/public"));
const hbs = expressHbs.create({
  extname: ".hbs",
  defaultLayout: "main.hbs",
  partialsDir: partialsPath,
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use("/users", userRoute);
app.use("/api", userRoute);
app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/allitems", async (req, res) => {
  const products = await Products.findAll({});
  res.render("itemList", { data: products });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/admin", (req, res) => {
  res.render("adminConsole");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

db.sequelize.sync().then(() => {
  console.log("database connected");
  app.listen(port, () => console.log(`Server is running in port ${port}`));
});
