import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoute from './routes/homeRoute';
import userRoute from './routes/userRoute';
import tokenRoute from './routes/tokenRoute';
import alunoRoute from './routes/alunoRoute';
import fotoRoute from './routes/fotoRoute';

const whiteList = [
  'https://cadastroalunos.rodolfotadeu.com.br',
  'https://apirest.rodolfotadeu.com.br',
  'https://reactcurso.rodolfotadeu.com.br',
  'https://orcamento.rodolfotadeu.com.br',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/fotos/', fotoRoute);
  }
}

export default new App().app;
