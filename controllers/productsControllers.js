const { Products } = require("../models");

const CreateItem = async (req, res) => {
  const { product_name, category, price, stockquantity, description } =
    req.body;
  await Products.create({
    product_name,
    category,
    price,
    stockquantity,
    description,
    image: req.file,
  });

  res.redirect("/allitems");
};

const getAllProducts = async (req, res) => {
  const data = await Products.findAll({});
  res.status(200).json(data);
};

const getOneProducts = async (req, res) => {
  const data = await Products.findOne({
    where: {
      productId: req.params.productId,
    },
  });
  res.status(200).json(data);
};

const postProducts = async (req, res) => {
  const data = req.body;
  const postData = await Products.create(data);
  res.status(200).json(postData);
};

const updateProducts = async (req, res) => {
  const data = req.body;
  const postData = await Products.update(data, {
    where: {
      productId: req.params.productId,
    },
  });
  res.status(200).json(postData);
};

const deleteProducts = async (req, res) => {
  const id = req.params.id;
  const data = await Products.destroy({
    where: { productId: req.params.productId },
  });
  res.status(200).json(data);
};

module.exports = {
  CreateItem,
  getAllProducts,
  getOneProducts,
  postProducts,
  updateProducts,
  deleteProducts,
};
