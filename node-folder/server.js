const express = require("express");
const cors = require("cors");
const models = require("./models");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  models.Product.findAll()
    .then((result) => {
      console.log(result);
      res.send({
        products: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("Error Occured");
    });
});

app.post("/products", (req, res) => {
  const body = req.body;
  const { name, price, seller, description, imageUrl } = body;
  if (!name || !price || !seller || !imageUrl) {
    return res.send("Please fill all field");
  }
  models.Product.create({
    name,
    price,
    seller,
    description,
    imageUrl,
  })
    .then((result) => {
      console.log(result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("Upload Failed");
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
