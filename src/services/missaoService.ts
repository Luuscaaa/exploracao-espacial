import { MissaoRepository } from '../repositories/missaoRepository';
import { Missao } from '../models/missaoModel';

export class MissaoService {
  private missaoRepo = new MissaoRepository();

  // Método para criar uma nova missão
  async create(missao: Missao): Promise<Missao> {
    return this.missaoRepo.create(missao);
  }

  // Método para listar todas as missões
  async findAll(): Promise<Missao[]> {
    return this.missaoRepo.findAll();
  }

  // Método para excluir uma missão pelo ID
  async delete(id: number): Promise<void> {
    return this.missaoRepo.delete(id);
  }
}
