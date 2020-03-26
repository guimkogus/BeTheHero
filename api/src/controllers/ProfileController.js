import connection from '../database/connection';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.auth;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
