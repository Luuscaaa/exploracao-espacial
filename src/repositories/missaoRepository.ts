import pool from "../config/database";
import { Missao } from "../models/missaoModel";

export class MissaoRepository {
  // Método para criar uma nova missão
  async create(missao: Missao): Promise<Missao> {
    const query = `
      INSERT INTO missoes (nome, planeta_alvo, duracao_anos, tripulantes, tecnologias, image)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    try {
      const result = await pool.query(query, [
        missao.nome,
        missao.planeta_alvo,
        missao.duracao_anos,
        missao.tripulantes,
        missao.tecnologias,
        missao.image || null,
      ]);
      return result.rows[0]; // Retorna a missão criada
    } catch (err) {
      console.error("Erro ao criar missão no banco de dados:", err); // Log de erro
      throw new Error("Erro ao criar missão"); // Lançando erro para o serviço
    }
  }

  // Método para listar todas as missões
  async findAll(): Promise<Missao[]> {
    const query = "SELECT * FROM missoes;";
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error("Erro ao listar missões no banco de dados:", err); // Log de erro
      throw new Error("Erro ao listar missões");
    }
  }

  // Método para excluir uma missão pelo ID
  async delete(id: number): Promise<void> {
    const query = "DELETE FROM missoes WHERE id = $1;";
    try {
      await pool.query(query, [id]);
    } catch (err) {
      console.error("Erro ao excluir missão no banco de dados:", err); // Log de erro
      throw new Error("Erro ao excluir missão");
    }
  }
}
