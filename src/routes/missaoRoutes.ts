import { Router } from "express";
import { MissaoController } from "../controllers/missaoController";

const router = Router();
const missaoController = new MissaoController();

// Rota para registrar uma nova missão
router.post("/missoes", missaoController.create);

// Rota para listar todas as missões
router.get("/missoes", missaoController.findAll);

// Rota para excluir uma missão
router.delete("/missoes/:id", missaoController.delete);

export default router;
