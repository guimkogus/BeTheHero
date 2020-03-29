import { celebrate, Joi } from 'celebrate';

class IncidentValidation {
  index(Segments) {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
  }

  store(Segments) {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        auth: Joi.string().required(),
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
      }),
    });
  }

  delete(Segments) {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    });
  }
}

export default new IncidentValidation();
