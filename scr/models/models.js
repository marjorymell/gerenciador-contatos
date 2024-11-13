export class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

  toString() {
    return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`;
  }
}

export class ComponenteContato {
  adicionar(contato) {}
  remover(contato) {}
  buscar(criterio) {}
  listar() {}
}

export class ContatoIndividual extends ComponenteContato {
  constructor(contato) {
    super();
    this.contato = contato;
  }

  buscar(criterio) {
    return criterio(this.contato) ? [this.contato] : [];
  }

  listar() {
    return [this.contato];
  }
}

export class GrupoContatos extends ComponenteContato {
  constructor() {
    super();
    this.contatos = [];
  }

  adicionar(contato) {
    this.contatos.push(contato);
  }

  remover(contato) {
    const index = this.contatos.indexOf(contato);
    if (index !== -1) {
      this.contatos.splice(index, 1);
    }
  }

  buscar(criterio) {
    return this.contatos.flatMap((contato) => contato.buscar(criterio));
  }

  listar() {
    return this.contatos.flatMap((contato) => contato.listar());
  }
}
