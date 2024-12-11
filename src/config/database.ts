// Configuração com o banco de dados

import { Pool } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

const connectionString =
  "postgresql://postgres:sfWkwbAxnebCpQoLnBWVCEnWqVxcRqap@autorack.proxy.rlwy.net:28278/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
