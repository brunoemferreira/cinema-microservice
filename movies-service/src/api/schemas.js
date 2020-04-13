const joi = require("@hapi/joi");

const movieSchema = joi.object({
  titulo: joi.string()
    .min(3)
    .max(30)
    .required(),

  sinopse: joi.string()
    .min(10)
    .max(150)
    .required(),

  duracao: joi.number()
    .integer()
    .min(10)
    .max(240)
    .required(),

  dataLancamento: joi.date()
    .required(),

  imagem: joi.string()
    .pattern(/^(https?:\/\/.+\.(jpe?g|png))$/),

  categorias: joi.array()
    .items(joi.string())
    .min(1)
    .max(2)
    .required()
});

module.exports = { movieSchema }