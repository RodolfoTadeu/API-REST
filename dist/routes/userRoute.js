"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllers = require('../controllers/UserControllers'); var _UserControllers2 = _interopRequireDefault(_UserControllers);

var _loginRequired = require('../middleware/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', _UserControllers2.default.store);
router.put('/', _loginRequired2.default, _UserControllers2.default.update);
router.delete('/', _loginRequired2.default, _UserControllers2.default.delete);

exports. default = router;

/*
  index -> Lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT
*/
