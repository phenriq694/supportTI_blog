module.exports = {
  up: (queryInterface, Sequelize) => {
    // Será executado quando a migration for aplicada
    return queryInterface.createTable('files', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
    return queryInterface.dropTable('files');
  },
};
