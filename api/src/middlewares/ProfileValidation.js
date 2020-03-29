import { celebrate, Joi } from 'celebrate';

class ProfileValidation {
  index(Segments) {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        auth: Joi.string().required(),
      }).unknown(),
    });
  }
}

export default new ProfileValidation();
