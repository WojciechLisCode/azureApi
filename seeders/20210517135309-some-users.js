"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "George",
          email: "dojqdjdq",
          phone: "6616156",
          password: "dsadad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leo",
          phone: "6645356",
          email: "dojqdjdq",
          password: "diluid",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
