import PageController from './app/Controllers/PageController';
import StepController from './app/Controllers/StepController';
import FileController from './app/Controllers/FileController';

const { Router } = require('express');

const routes = new Router();

routes.post('/pages', PageController.store);

routes.post('/pages/:page_id/steps', StepController.store);

routes.post('/pages/:page_id/steps/step_id', FileController.store);
// routes.put('/pages/:page_id/steps/steps_id', StepController.update);

module.exports = routes;
