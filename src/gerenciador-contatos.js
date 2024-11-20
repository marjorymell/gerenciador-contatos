import { GrupoContatos, ContatoIndividual } from "./models/models.js";
import { BuscaPorNome } from "./strategies/strategies.js";

export class GerenciadorContatos {
  constructor() {
    this.raiz = new GrupoContatos();
    this.estrategiaBusca = new BuscaPorNome();
  }

  // Permite alterar a estratégia de busca em tempo de execução
  setEstrategiaBusca(estrategia) {
    this.estrategiaBusca = estrategia;
  }

  adicionar(contato) {
    this.raiz.adicionar(new ContatoIndividual(contato));
  }

  remover(contato) {
    this.raiz.remover(contato);
  }

  // Retorna todos os contatos do grupo
  listar() {
    return this.raiz.listar();
  }

  // Realiza a busca de contatos de acordo com o termo e a estratégia de busca
  buscar(termo) {
    // Filtra os contatos usando a estratégia de busca configurada
    return this.raiz.buscar((contato) =>
      this.estrategiaBusca.execute(contato, termo)
    );
  }
}
