import cors from 'cors';
import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { corsClient, port } from './config/index.js';

import router from './routes/index.js';

var app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(cors({
    origin: corsClient.domain,
    credentials: true,
    methods: ['GET'],
    maxAge: 3600 * 1000,
}));
app.options('*', cors());

app.use('/', router);

app.use(function (_req, _res, next) {
    next(createError(404, 'Route does not exist.'));
});

app.use(function (err, _req, res, _next) {
    res.status(err.status || 500).send(err);
});

app.listen(port, () => {
    console.log('Servidor corriendo en ' + port);
});


