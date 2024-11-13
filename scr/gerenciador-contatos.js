import { GrupoContatos, ContatoIndividual } from "./models/models.js";
import { BuscaPorNome } from "./strategies/strategies.js";

export class GerenciadorContatos {
  constructor() {
    this.raiz = new GrupoContatos();
    this.estrategiaBusca = new BuscaPorNome();
  }

  setEstrategiaBusca(estrategia) {
    this.estrategiaBusca = estrategia;
  }

  adicionar(contato) {
    this.raiz.adicionar(new ContatoIndividual(contato));
  }

  remover(contato) {
    this.raiz.remover(contato);
  }

  listar() {
    return this.raiz.listar();
  }

  buscar(termo) {
    return this.raiz.buscar((contato) =>
      this.estrategiaBusca.execute(contato, termo)
    );
  }
}
