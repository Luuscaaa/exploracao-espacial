import { MissaoRepository } from '../repositories/missaoRepository';
import { Missao } from '../models/missaoModel';

export class MissaoService {
  private missaoRepo = new MissaoRepository();

  // Método para criar uma nova missão
  async create(missao: Missao): Promise<Missao> {
    try {
      return await this.missaoRepo.create(missao);
    } catch (err) {
      console.error("Erro ao criar missão no serviço:", err);  // Log de erro
      throw new Error('Erro ao criar missão');  // Lançando o erro novamente para ser tratado no controller
    }
  }

  // Método para listar todas as missões
  async findAll(): Promise<Missao[]> {
    try {
      return await this.missaoRepo.findAll();
    } catch (err) {
      console.error("Erro ao listar missões no serviço:", err);  // Log de erro
      throw new Error('Erro ao listar missões');  // Lançando o erro novamente para ser tratado no controller
    }
  }

  // Método para excluir uma missão pelo ID
  async delete(id: number): Promise<void> {
    try {
      await this.missaoRepo.delete(id);
    } catch (err) {
      console.error("Erro ao excluir missão no serviço:", err);  // Log de erro
      throw new Error('Erro ao excluir missão'); 
    }
  }
}