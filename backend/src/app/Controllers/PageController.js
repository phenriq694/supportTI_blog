import Page from '../models/Page';

class PageController {
  async store(req, res) {
    const page = await Page.create(req.body);

    return res.json(page);
  }
}

export default new PageController();
