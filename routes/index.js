import { Router } from 'express';

import authRouter from './auth.js';

var router = Router();

router.use('/auth', authRouter);

export default router;