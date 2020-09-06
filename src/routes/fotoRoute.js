import { Router } from 'express';
import loginRequired from '../middleware/loginRequired';

import fotoController from '../controllers/FotoControllers';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
