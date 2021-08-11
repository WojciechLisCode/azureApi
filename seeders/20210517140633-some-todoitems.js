"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          name: "do this",
          deadline: "today",
          important: true,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "do that",
          deadline: "tomorrow",
          important: false,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "and do this",
          deadline: "today",
          important: true,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "do that later",
          deadline: "tomorrow",
          important: true,
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "do this maybe",
          deadline: "today",
          important: false,
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "do that someday",
          deadline: "next week",
          important: false,
          todoListId: 3,
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
