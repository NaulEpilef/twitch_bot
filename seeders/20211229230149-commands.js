const moment = require("moment");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("commands", [
      {
        command: "!aniversario",
        // info: "shbdakabjsdklb",
        info: JSON.stringify({
          users: [],
          date: moment().format("DD/MM"),
        }),
        createdAt: moment().format("YYYY-MM-DD"),
        updatedAt: moment().format("YYYY-MM-DD"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("commands", null, {});
  },
};
