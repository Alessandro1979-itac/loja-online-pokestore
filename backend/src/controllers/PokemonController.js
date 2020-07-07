const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('pokemons').count();

    const pokemons = await connection('pokemons')
                            .limit(20)
                            .offset((page - 1) * 20)
                            .select('*');

    res.header('X-Total-Count', count['count(*)']);
    return res.json(pokemons);
  }
}
