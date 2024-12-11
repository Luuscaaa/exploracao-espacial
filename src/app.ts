import express, { Application } from 'express';
import cors from 'cors';  // Se você precisar de CORS
import missaoRoutes from './routes/missaoRoutes';
import usuarioRoutes from './routes/usuarioRoutes';

const app: Application = express();

// Middleware para interpretar o corpo da requisição
app.use(express.json());
app.use(cors());

// Usando as rotas
app.use('/api', missaoRoutes);
app.use('/api', usuarioRoutes);

// Rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Iniciando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});