import express from 'express';
import { Segments } from 'celebrate';

import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

import OngValidation from './middlewares/OngValidation';
import ProfileValidation from './middlewares/ProfileValidation';
import IncidentValidation from './middlewares/IncidentValidation';
import SessionValidation from './middlewares/SessionValidation';

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidation.store(Segments), OngController.store);

routes.get(
  '/incidents',
  IncidentValidation.index(Segments),
  IncidentController.index
);
routes.post(
  '/incidents',
  IncidentValidation.store(Segments),
  IncidentController.store
);
routes.delete(
  '/incidents/:id',
  IncidentValidation.delete(Segments),
  IncidentController.delete
);

routes.get(
  '/profile',
  ProfileValidation.index(Segments),
  ProfileController.index
);

routes.post(
  '/sessions',
  SessionValidation.create(Segments),
  SessionController.create
);

export default routes;
