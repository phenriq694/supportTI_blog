import Page from '../models/Page';
import Step from '../models/Step';

class StepController {
  async store(req, res) {
    const { page_id } = req.params;
    const { step_name } = req.body;

    const page = await Page.findByPk(page_id);

    if (!page) {
      return res.status(400).json({ error: 'Page not found' });
    }

    const step = await Step.create({ step_name, page_id });

    return res.json(step);
  }

  // async update(req, res) {
  //   const step = await Step.update(req.body);

  //   return res.json(step);
  // }
}

export default new StepController();
