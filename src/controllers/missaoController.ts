import { Request, Response } from 'express';
import { MissaoService } from '../services/missaoService';
import { Missao } from '../models/missaoModel';

export class MissaoController {
  private missaoService = new MissaoService();

  // Rota para registrar uma nova missão
  async create(req: Request, res: Response): Promise<void> {
    const missao: Missao = req.body;
    try {
      const newMissao = await this.missaoService.create(missao);
      res.status(201).json(newMissao);
    } catch (err) {
      console.error("Erro ao registrar missão:", err);  // Log detalhado do erro
      res.status(400).json({ error: 'Erro ao registrar missão' });
    }
  }

  // Rota para listar todas as missões
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const missoes = await this.missaoService.findAll();
      res.status(200).json(missoes);
    } catch (err) {
      console.error("Erro ao listar missões:", err);  // Log detalhado do erro
      res.status(400).json({ error: 'Erro ao listar missões' });
    }
  }

  // Rota para excluir uma missão
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.missaoService.delete(Number(id));
      res.status(200).json({ message: 'Missão excluída com sucesso' });
    } catch (err) {
      console.error("Erro ao excluir missão:", err);  // Log detalhado do erro
      res.status(400).json({ error: 'Erro ao excluir missão' });
    }
  }
}