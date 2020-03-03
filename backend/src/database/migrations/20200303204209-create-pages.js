module.exports = {
  up: (queryInterface, Sequelize) => {
    // Será executado quando a migration for aplicada
    return queryInterface.createTable('pages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      page_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    // Será executado quando a migration for desfeita.
    return queryInterface.dropTable('pages');
  },
};
