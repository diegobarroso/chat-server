import { Router } from 'express';

import { getToken } from '../controllers/auth.js';

var router = Router();

router.get('/token', getToken);

export default router;