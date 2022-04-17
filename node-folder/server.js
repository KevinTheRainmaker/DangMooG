const express = require("express");
const cors = require("cors");
const models = require("./models");
const app = express();
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/products", (req, res) => {
  models.Product.findAll({
    order: [["createdAt", "DESC"]],
    attributes: [
      "id",
      "name",
      "price",
      "createdAt",
      "seller",
      "imageUrl",
      "soldout",
    ],
  })
    .then((result) => {
      console.log(result);
      res.send({
        products: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send("Error Occured");
    });
});

app.post("/products", (req, res) => {
  const body = req.body;
  const { name, price, seller, description, imageUrl } = body;
  if (!name) {
    return res.status(400).send("Please enter name");
  }
  if (!seller) {
    return res.status(400).send("Please enter seller");
  }
  if (!description) {
    return res.status(400).send("Please enter description");
  }
  if (!imageUrl) {
    return res.status(400).send("Please fill imageUrl");
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
      res.status(400).send("Upload Failed");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.Product.findOne({
    where: {
      id: id,
    },
  })
    .then((result) => {
      console.log(result);
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send("Read Product Failed");
    });
});

app.post("/image", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.send({
    imageUrl: file.path,
  });
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
