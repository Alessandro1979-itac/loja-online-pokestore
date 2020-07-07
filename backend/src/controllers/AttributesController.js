const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const pokemon_id = req.headers.pokemon_id;

    const pokemons = await connection('attributes')
                            .join('pokemons', 'pokemon_id', '=', 'attributes.pokemon_id')
                            .limit(1)
                            .where('attributes.pokemon_id', pokemon_id)
                            .select(['pokemons.*', 'attributes.total', 'attributes.hp', 
                            'attributes.attack', 'attributes.defense', 
                            'attributes.sp_atk', 'attributes.sp_def', 
                            'attributes.speed']);
    
      return res.json(pokemons);
  }
}
