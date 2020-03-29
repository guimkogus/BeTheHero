import { celebrate, Joi } from 'celebrate';

class OngValidation {
  store(Segments) {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    });
  }
}

export default new OngValidation();
