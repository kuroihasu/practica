import express from 'express';
import dotenv from 'dotenv';
import router from './src/routers/index.router.js';
import errorController from './src/controllers/error/index.controller.js';

dotenv.config();
const { HTTP_PORT } = process.env;

const app = express();
app.use(express.json());
app.use(router);
app.use(errorController);

app.listen(HTTP_PORT, () => {
  console.log(`Servidor corriendo en  http://localhost:${HTTP_PORT}`);
});

