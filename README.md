# Gerenciador de Contatos

## Descrição

Este projeto implementa um gerenciador de contatos em **CLI (Command Line Interface)**, com funcionalidades para adicionar, remover, listar e buscar contatos. O sistema foi projetado utilizando dois padrões de design essenciais: **Composite** e **Strategy**. Esses padrões foram escolhidos com o objetivo de organizar os contatos em grupos e permitir buscas flexíveis e expansíveis, respectivamente.

## Padrões de Design Utilizados

### **1. Padrão Composite**

O padrão **Composite** é um padrão estrutural que permite compor objetos em estruturas de árvore para representar hierarquias parte-todo. Ele facilita a manipulação de objetos compostos de maneira uniforme, permitindo que tanto objetos simples quanto compostos (como grupos de objetos) sejam tratados de forma semelhante.

#### **Motivo da Escolha do Padrão Composite:**

- **Facilidade de Extensão**: O Composite permite adicionar novos tipos de componentes (como grupos de contatos) sem alterar as classes existentes. Isso é crucial para um projeto que pode ser expandido no futuro, pois a adição de novos grupos ou novos tipos de contatos (como contatos empresariais ou de emergência) pode ser realizada sem modificar o código que já está funcionando.
- **Organização Hierárquica**: O padrão facilita a criação de uma estrutura de árvore onde um **GrupoContatos** pode conter tanto **ContatoIndividual** quanto outros **GrupoContatos**. Isso permite uma organização flexível de contatos, que pode crescer sem limitações rígidas.

#### **Implementação:**

- **ContatoIndividual**: Representa um contato único. Ele possui as propriedades `nome`, `telefone` e `email`, além de métodos como `adicionar()`, `remover()` e `listar()`, que são comuns a todos os contatos, mas implementados de maneira simples.
- **GrupoContatos**: Representa um grupo de contatos, podendo conter tanto **ContatoIndividual** quanto outros **GrupoContatos**. Ele implementa os mesmos métodos (`adicionar()`, `remover()`, `listar()`), mas com lógica recursiva, permitindo a manipulação de subgrupos de forma eficiente.

### **2. Padrão Strategy**

O padrão **Strategy** é um padrão comportamental que permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. O algoritmo escolhido pode ser alterado em tempo de execução, permitindo que o comportamento do sistema varie sem modificar seu código base.

#### **Motivo da Escolha do Padrão Strategy:**

- **Flexibilidade nas Buscas**: O sistema de busca de contatos pode exigir diferentes critérios, como buscar por nome, telefone ou email. Ao usar o padrão **Strategy**, é possível adicionar novas estratégias de busca sem alterar as classes de contatos ou a estrutura existente.
- **Isolamento de Algoritmos de Busca**: Cada estratégia de busca (nome, telefone, email) é implementada de forma independente, o que facilita a manutenção, pois novos algoritmos podem ser adicionados sem impactar o restante do código.

#### **Implementação:**

- **BuscaPorNome**: Implementa a estratégia de busca por nome, filtrando os contatos pelo atributo `nome`.
- **BuscaPorTelefone**: Implementa a estratégia de busca por telefone, filtrando os contatos pelo atributo `telefone`.
- **BuscaPorEmail**: Implementa a estratégia de busca por email, filtrando os contatos pelo atributo `email`.

Essas estratégias podem ser intercambiáveis em tempo de execução, permitindo que o usuário escolha a forma de busca mais adequada para sua necessidade no momento.

## Classes Principais

### **Contato**

Representa um contato individual, com as seguintes propriedades e métodos:

- **Propriedades**:
  - `nome`: Nome do contato
  - `telefone`: Telefone do contato
  - `email`: Email do contato
- **Métodos**:
  - `adicionar()`: Adiciona um novo contato.
  - `remover()`: Remove um contato.
  - `listar()`: Lista as informações do contato.

### **ComponenteContato**

Classe base que define os métodos comuns para **ContatoIndividual** e **GrupoContatos**. Esses métodos incluem `adicionar()`, `remover()`, `buscar()`, e `listar()`, mas a implementação pode variar conforme o tipo de componente (contato individual ou grupo).

### **ContatoIndividual e GrupoContatos**

- **ContatoIndividual**: Representa um contato único e implementa os métodos de **ComponenteContato**.
- **GrupoContatos**: Representa um grupo de contatos e também implementa os métodos de **ComponenteContato**. Ele permite que outros contatos ou grupos sejam adicionados a ele, criando uma estrutura hierárquica. A implementação dos métodos como `adicionar()`, `remover()`, `buscar()` e `listar()` é recursiva para possibilitar a manipulação de grupos e subgrupos de contatos.

### **Estratégias de Busca**

- **BuscaPorNome**: Estratégia para buscar contatos pelo nome.
- **BuscaPorTelefone**: Estratégia para buscar contatos pelo telefone.
- **BuscaPorEmail**: Estratégia para buscar contatos pelo email.

Cada uma dessas estratégias implementa uma interface comum de busca, que pode ser trocada dinamicamente durante a execução do sistema.

### **CLI**

A interface de linha de comando (CLI) permite ao usuário interagir com o gerenciador de contatos. As principais funcionalidades incluem:

1. **Adicionar Contato**: Adiciona um novo contato individual ou grupo de contatos.
2. **Remover Contato**: Remove um contato específico.
3. **Listar Contatos**: Exibe todos os contatos cadastrados.
4. **Buscar Contatos**: Permite realizar buscas por nome, telefone ou email.

## Dependências

Este projeto utiliza as seguintes dependências para desenvolvimento e manutenção do código:

### **Dependências de Desenvolvimento**

- **@eslint/js**: `^9.14.0`
- **eslint**: `^9.14.0`
- **eslint-config-prettier**: `^9.1.0`
- **eslint-plugin-import**: `^2.31.0`
- **eslint-plugin-prettier**: `^5.2.1`
- **globals**: `^15.12.0`
- **prettier**: `^3.3.3`.

### **Motivo da Escolha das Dependências:**

- **ESLint** foi escolhido para garantir que o código siga as melhores práticas de JavaScript e ajude a evitar erros.
- **Prettier** foi escolhido para manter o código formatado de maneira consistente.
- **Plugins e configurações adicionais** como **eslint-plugin-import** e **eslint-config-prettier** são necessários para uma integração eficiente do ESLint com o Prettier, garantindo uma experiência de desenvolvimento sem conflitos.

## Como Executar

Para iniciar o gerenciador de contatos, execute o seguinte comando no terminal:

1. Clone o repositório na sua máquina local:

   ```bash
   git clone https://github.com/marjorymell/gerenciador-contatos
   ```

2. Abra o terminal e roda `npm install` para instalar as dependências necessárias.
3. Após instalar, rode `npm start` para interagir com o sitema.

Isso inicializa o sistema e permite que você interaja com as funcionalidades de adicionar, remover, listar e buscar contatos. O sistema oferece uma interface simples de linha de comando onde você pode escolher qual ação deseja realizar.

## Conclusão

A escolha dos padrões **Composite** e **Strategy** foi feita com base nos seguintes motivos:

- **Padrão Composite** para permitir uma estrutura hierárquica de contatos, onde grupos de contatos podem ser tratados de forma recursiva, facilitando futuras extensões e alterações sem modificar o código base.
- **Padrão Strategy** para implementar uma busca flexível e extensível, permitindo que diferentes algoritmos de busca possam ser trocados facilmente em tempo de execução, atendendo aos requisitos de busca independente de outros componentes do sistema.

Esses padrões proporcionam uma arquitetura robusta, fácil de estender e manter, que está preparada para crescer conforme as necessidades do projeto se expandem.
