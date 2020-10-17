import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.enabledCors();
    this.middlewares();
    this.routes();
  }

  enabledCors() {
    this.server.use(
      cors({
        origin: '*',
        methods: 'GET',
        preflightContinue: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
      })
    );
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
