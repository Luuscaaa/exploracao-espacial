import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuarioService';
import { Usuario } from '../models/usuarioModel';

export class UsuarioController {
  private usuarioService = new UsuarioService();

  // Rota para registrar um novo usuário
  async register(req: Request, res: Response): Promise<void> {
    const usuario: Usuario = req.body;
    try {
      const newUser = await this.usuarioService.create(usuario);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: 'Erro ao registrar usuário' });
    }
  }

  // Rota para login (exemplo)
  async login(req: Request, res: Response): Promise<void> {
    const { email, senha } = req.body;
    try {
      const user = await this.usuarioService.findByEmail(email);
      if (user && user.senha === senha) {
        res.status(200).json({ message: 'Login bem-sucedido' });
      } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
      }
    } catch (err) {
      res.status(400).json({ error: 'Erro ao tentar realizar login' });
    }
  }
}
