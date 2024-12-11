import { UsuarioRepository } from '../repositories/usuarioRepository';
import { Usuario } from '../models/usuarioModel';

export class UsuarioService {
  private usuarioRepo = new UsuarioRepository();

  // Método para criar um novo usuário
  async create(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepo.create(usuario);
  }

  // Método para buscar um usuário por email
  async findByEmail(email: string): Promise<Usuario | null> {
    return this.usuarioRepo.findByEmail(email);
  }
}
