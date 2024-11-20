// Estratégia de busca que verifica se o nome do contato contém o termo de busca (ignorando maiúsculas/minúsculas).
export class BuscaPorNome {
  execute(contato, termo) {
    return contato.nome.toLowerCase().includes(termo.toLowerCase());
  }
}

// Estratégia de busca que verifica se o telefone do contato contém o termo de busca.
export class BuscaPorTelefone {
  execute(contato, termo) {
    return contato.telefone.includes(termo);
  }
}

// Estratégia de busca que verifica se o email do contato contém o termo de busca (ignorando maiúsculas/minúsculas).
export class BuscaPorEmail {
  execute(contato, termo) {
    return contato.email.toLowerCase().includes(termo.toLowerCase());
  }
}
