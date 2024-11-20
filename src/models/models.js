// Representa um contato individual com nome, telefone e email
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

// Classe base para todos os componentes de contato (individuais ou grupos).
// Implementa os métodos adicionar, remover, buscar e listar que serão sobrescritos nas subclasses
export class ComponenteContato {
  adicionar(contato) {}
  remover(contato) {}
  buscar(criterio) {}
  listar() {}
}

// Representa um contato único. Implementa os métodos de busca e listagem de forma específica para um contato individual
export class ContatoIndividual extends ComponenteContato {
  constructor(contato) {
    super();
    this.contato = contato;
  }

  // Busca o contato individual com base no critério fornecido
  buscar(criterio) {
    return criterio(this.contato) ? [this.contato] : [];
  }

  listar() {
    return [this.contato];
  }
}

// Representa um grupo de contatos. Pode conter outros contatos ou grupos e implementa métodos de busca e listagem recursivos
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

  // Aplica o critério de busca a todos os contatos no grupo, incluindo contatos dentro de grupos
  buscar(criterio) {
    return this.contatos.flatMap((contato) => contato.buscar(criterio));
  }

  // Retorna todos os contatos no grupo, incluindo contatos dentro de grupos
  listar() {
    return this.contatos.flatMap((contato) => contato.listar());
  }
}
