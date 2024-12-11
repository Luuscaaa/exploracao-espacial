import pool from '../config/database';
import { Usuario } from '../models/usuarioModel';

export class UsuarioRepository {
  // Método para criar um novo usuário
  async create(usuario: Usuario): Promise<Usuario> {
    const query = `
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(query, [usuario.nome, usuario.email, usuario.senha]);
    return result.rows[0];  // Retorna o usuário criado
  }

  // Método para encontrar um usuário pelo email
  async findByEmail(email: string): Promise<Usuario | null> {
    const query = `
      SELECT * FROM usuarios WHERE email = $1;
    `;
    const result = await pool.query(query, [email]);
    return result.rows.length ? result.rows[0] : null;
  }
}
