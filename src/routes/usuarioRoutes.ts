import { Router } from 'express';
import { UsuarioController } from '../controllers/usuarioController';

const router = Router();
const usuarioController = new UsuarioController();

// Rota para registrar um novo usuário
router.post('/usuarios', usuarioController.register);

// Rota para login de usuário
router.post('/usuarios/login', usuarioController.login);

export default router;