"use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
/**
 * Add seed commands here.
 *
 * Example:
 * await queryInterface.bulkInsert('People', [{
 *   name: 'John Doe',
 *   isBetaMember: false
 * }], {});
 *
 */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Café americano",
          flavor: null,
          complement: null,
          price: 5,
          type: "breakfast",
          subType: "breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Café com leite",
          flavor: null,
          complement: null,
          price: 7,
          type: "breakfast",
          subType: "breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Misto quente",
          flavor: null,
          complement: null,
          price: 10,
          type: "breakfast",
          subType: "breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Suco de fruta natural",
          flavor: null,
          complement: null,
          price: 7,
          type: "breakfast",
          subType: "breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "carne",
          complement: null,
          price: 10,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "frango",
          complement: null,
          price: 10,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "vegetariano",
          complement: null,
          price: 10,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "carne",
          complement: "queijo",
          price: 10,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "frango",
          complement: "queijo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "carne",
          complement: "ovo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "frango",
          complement: "ovo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "vegetariano",
          complement: "ovo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer duplo",
          flavor: "carne",
          complement: "ovo",
          price: 15,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer duplo",
          flavor: "vegetariano",
          complement: "ovo",
          price: 15,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer duplo",
          flavor: "carne",
          complement: "ovo",
          price: 16,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer duplo",
          flavor: "vegetariano",
          complement: "null",
          price: 15,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "vegetariano",
          complement: "queijo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "carne",
          complement: "ovo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "vegetariano",
          complement: "ovo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer simples",
          flavor: "vegetariano",
          complement: "ovo",
          price: 11,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer duplo",
          flavor: "carne",
          complement: null,
          price: 15,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hambúrguer duplo",
          flavor: "frango",
          complement: null,
          price: 15,
          type: "all-day",
          subType: "hamburguer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Batata frita",
          flavor: null,
          complement: null,
          price: 5,
          type: "all-day",
          subType: "side",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Anéis de cebola",
          flavor: null,
          complement: null,
          price: 5,
          type: "all-day",
          subType: "side",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Água 500mL",
          flavor: null,
          complement: null,
          price: 5,
          type: "all-day",
          subType: "drinks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Água 750mL",
          flavor: null,
          complement: null,
          price: 7,
          type: "all-day",
          subType: "drinks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Refrigerante 500mL",
          flavor: null,
          complement: null,
          price: 5,
          type: "all-day",
          subType: "drinks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Refrigerante 750mL",
          flavor: null,
          complement: null,
          price: 7,
          type: "all-day",
          subType: "drinks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
/**
 * Add commands to revert seed here.
 *
 * Example:
 * await queryInterface.bulkDelete('People', null, {});
 */
