import { Router } from 'express';

import authRouter from './auth.js';

var router = Router();

router.use('/auth/token', authRouter);

export default router;