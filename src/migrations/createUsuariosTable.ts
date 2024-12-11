import pool from "../config/database"; // Reutilizando a configuração de banco já feita

const createUsuariosTable = async () => {
  const client = await pool.connect(); // Obtendo um cliente do pool para rodar as queries
  try {
    // Criação da tabela de "usuarios"
    const createUsuariosQuery = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        senha VARCHAR(255) NOT NULL
      );
    `;
    await client.query(createUsuariosQuery); // Executando a query para criar a tabela
    console.log('Tabela "usuarios" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar a tabela "usuarios":', err); // Tratamento de erro
  } finally {
    client.release(); // Libera o cliente para o pool
  }
};

createUsuariosTable().then(() => process.exit(0)); // Após terminar a execução, sair do processo
