const express = require("express");
const cors = require("cors");
const models = require("./models");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const query = req.query;
  console.log("QUERY: ", query);
  res.send({
    products: [
      {
        id: 1,
        name: "농구공 1호",
        price: 50000,
        seller: "킹동영",
        imageUrl: "images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공 1호",
        price: 60000,
        seller: "킹동영",
        imageUrl: "images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 120000,
        seller: "킴동우",
        imageUrl: "images/products/keyboard2.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  res.send(`id: ${id}`);
});

app.listen(port, () => {
  console.log("Server Running");
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB Connected");
    })
    .catch(function (err) {
      console.error(err);
      console.log("DB Connection Error");
      process.exit();
    });
});
