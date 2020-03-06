import Sequelize, { Model } from 'sequelize';

class Page extends Model {
  static init(sequelize) {
    super.init(
      {
        page_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Step, { as: 'steps' });
  }
}

export default Page;
