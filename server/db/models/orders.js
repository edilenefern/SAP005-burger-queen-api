"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsToMany(models.Products, {
        through: "ProductsOrders",
        as: "Products",
        foreignKey: "orderId",
        otherKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  Orders.init(
    {
      userId: DataTypes.INTEGER,
      clientName: DataTypes.STRING,
      table: DataTypes.INTEGER,
      status: DataTypes.STRING,
      processedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
