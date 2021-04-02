"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ProductsOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        references: { model: "Orders", key: "id" },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      productId: {
        references: { model: "Products", key: "id" },
        type: Sequelize.INTEGER,
      },
      qtd: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ProductsOrders");
  },
};
