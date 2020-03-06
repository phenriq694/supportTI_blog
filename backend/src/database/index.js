import Sequelize from 'sequelize';

import Page from '../app/models/Page';
import File from '../app/models/File';
import Step from '../app/models/Step';

import databaseConfig from '../config/database';

const models = [Page, File, Step];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
