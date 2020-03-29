import { celebrate, Joi } from 'celebrate';

class SessionValidation {
  create(Segments) {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    });
  }
}

export default new SessionValidation();
