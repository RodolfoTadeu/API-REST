"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _homeRoute = require('./routes/homeRoute'); var _homeRoute2 = _interopRequireDefault(_homeRoute);
var _userRoute = require('./routes/userRoute'); var _userRoute2 = _interopRequireDefault(_userRoute);
var _tokenRoute = require('./routes/tokenRoute'); var _tokenRoute2 = _interopRequireDefault(_tokenRoute);
var _alunoRoute = require('./routes/alunoRoute'); var _alunoRoute2 = _interopRequireDefault(_alunoRoute);
var _fotoRoute = require('./routes/fotoRoute'); var _fotoRoute2 = _interopRequireDefault(_fotoRoute);

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
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoute2.default);
    this.app.use('/users/', _userRoute2.default);
    this.app.use('/tokens/', _tokenRoute2.default);
    this.app.use('/alunos/', _alunoRoute2.default);
    this.app.use('/fotos/', _fotoRoute2.default);
  }
}

exports. default = new App().app;
