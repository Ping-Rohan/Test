module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stockquantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Products;
};
