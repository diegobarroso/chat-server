import { Router } from 'express';

import { getToken } from '../controllers/auth.js';

var router = Router();

router.get('/', getToken);

export default router;