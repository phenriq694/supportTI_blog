module.exports = {
  up: (queryInterface, Sequelize) => {
    // Será executado quando a migration for aplicada
    return queryInterface.createTable('description', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      step_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pages',
          key: 'id',
        },
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
    return queryInterface.dropTable('description');
  },
};
