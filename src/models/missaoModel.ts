export interface Missao {
  id: number;
  nome: string;
  planeta_alvo: string;
  duracao_anos: number;
  tripulantes: number;
  tecnologias: string[];
  image?: string;
}
