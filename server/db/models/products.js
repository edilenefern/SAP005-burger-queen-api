"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsToMany(models.Orders, {
        through: "ProductsOrders",
        as: "Orders",
        foreignKey: "productId",
        otherKey: "orderId",
      });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      flavor: DataTypes.STRING,
      complement: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      type: DataTypes.STRING,
      subType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
