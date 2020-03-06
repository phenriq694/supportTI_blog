import Sequelize, { Model } from 'sequelize';

class Step extends Model {
  static init(sequelize) {
    super.init(
      {
        step_name: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Page, { foreignKey: 'page_id', as: 'page' });
  }
}

export default Step;
