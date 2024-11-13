export class BuscaPorNome {
  execute(contato, termo) {
    return contato.nome.toLowerCase().includes(termo.toLowerCase());
  }
}

export class BuscaPorTelefone {
  execute(contato, termo) {
    return contato.telefone.includes(termo);
  }
}

export class BuscaPorEmail {
  execute(contato, termo) {
    return contato.email.toLowerCase().includes(termo.toLowerCase());
  }
}
