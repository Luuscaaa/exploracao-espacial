import express from "express";
import cors from "cors";
import missoesRoutes from "./routes/missaoRoutes";

const app = express();

app.use(cors());
app.use(express.json()); 

// Use as rotas de missões com o prefixo '/api'
app.use("/api", missoesRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
