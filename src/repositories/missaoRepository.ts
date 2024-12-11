import pool from '../config/database';
import { Missao } from '../models/missaoModel';

export class MissaoRepository {
  // Método para criar uma nova missão
  async create(missao: Missao): Promise<Missao> {
    const query = `
      INSERT INTO missoes (nome, planeta_alvo, duracao_anos, tripulantes, tecnologias, image)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const result = await pool.query(query, [missao.nome, missao.planeta_alvo, missao.duracao_anos, missao.tripulantes, missao.tecnologias, missao.image || null]);
    return result.rows[0];  // Retorna a missão criada
  }

  // Método para listar todas as missões
  async findAll(): Promise<Missao[]> {
    const query = 'SELECT * FROM missoes;';
    const result = await pool.query(query);
    return result.rows;
  }

  // Método para excluir uma missão pelo ID
  async delete(id: number): Promise<void> {
    const query = 'DELETE FROM missoes WHERE id = $1;';
    await pool.query(query, [id]);
  }
}
