import pool from '../config/database';  // Reutilizando a configuração de banco já feita

const createMissoesTable = async () => {
  const client = await pool.connect();  // Obtendo um cliente do pool para rodar as queries
  try {
    // Criação da tabela de "missoes"
    const createMissoesQuery = `
      CREATE TABLE IF NOT EXISTS missoes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        planeta_alvo VARCHAR(100) NOT NULL,
        duracao_anos FLOAT NOT NULL,
        tripulantes INT NOT NULL CHECK (tripulantes >= 0),
        tecnologias TEXT[] NOT NULL  -- Array de tecnologias usadas na missão
      );
    `;
    await client.query(createMissoesQuery);  // Executando a query para criar a tabela
    console.log('Tabela "missoes" criada com sucesso!');

    // Adicionando a coluna 'image' à tabela "missoes"
    const alterTableQuery = `
      ALTER TABLE missoes
      ADD COLUMN IF NOT EXISTS image VARCHAR(255);
    `;
    await client.query(alterTableQuery);
    console.log('Coluna "image" adicionada à tabela "missoes" com sucesso!');
  } catch (err) {
    console.error('Erro ao criar a tabela "missoes" ou adicionar coluna:', err);  // Tratamento de erro
  } finally {
    client.release();  // Libera o cliente para o pool
  }
};

createMissoesTable().then(() => process.exit(0));  // Após terminar a execução, sair do processo
