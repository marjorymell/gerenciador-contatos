import readline from "readline";
import { Contato } from "./models/models.js";
import { GerenciadorContatos } from "./gerenciador-contatos.js";
import {
  BuscaPorNome,
  BuscaPorTelefone,
  BuscaPorEmail,
} from "./strategies/strategies.js";

export class CLI {
  constructor() {
    this.gerenciador = new GerenciadorContatos();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  exibirMenu() {
    console.log("\n--- Menu ---");
    console.log("1. Adicionar contato");
    console.log("2. Remover contato");
    console.log("3. Listar contatos");
    console.log("4. Buscar contatos");
    console.log("5. Sair");
    console.log("\n");
    this.rl.question("Escolha uma opção: ", this.handleMenuChoice.bind(this));
  }

  handleMenuChoice(choice) {
    switch (choice) {
      case "1":
        this.adicionarContato();
        break;
      case "2":
        this.removerContato();
        break;
      case "3":
        this.listarContatos();
        break;
      case "4":
        this.buscarContatos();
        break;
      case "5":
        this.rl.close();
        return;
      default:
        console.log("Opção inválida.");
        this.exibirMenu();
    }
  }

  adicionarContato() {
    this.rl.question("Nome: ", (nome) => {
      if (!nome) {
        console.log("Nome é obrigatório!");
        return this.adicionarContato();
      }
      this.rl.question("Telefone: ", (telefone) => {
        if (!telefone) {
          console.log("Telefone é obrigatório!");
          return this.adicionarContato();
        }
        this.rl.question("Email: ", (email) => {
          if (!email) {
            console.log("Email é obrigatório!");
            return this.adicionarContato();
          }
          this.gerenciador.adicionar(new Contato(nome, telefone, email));
          console.log("Contato adicionado com sucesso!");
          this.exibirMenu();
        });
      });
    });
  }

  removerContato() {
    this.rl.question("Digite o nome do contato a ser removido: ", (nome) => {
      const contatos = this.gerenciador.buscar(nome);
      if (contatos.length === 0) {
        console.log("Contato não encontrado.");
      } else {
        this.gerenciador.remover(contatos[0]);
        console.log("Contato removido com sucesso!");
      }
      this.exibirMenu();
    });
  }

  listarContatos() {
    const contatos = this.gerenciador.listar();
    if (contatos.length === 0) {
      console.log("Nenhum contato encontrado.");
    } else {
      console.log("Lista de contatos:");
      console.log(contatos.map((c) => c.toString()).join("\n"));
    }
    this.exibirMenu();
  }

  buscarContatos() {
    this.rl.question(
      "Escolha o tipo de busca (1-Nome, 2-Telefone, 3-Email): ",
      (tipo) => {
        if (["1", "2", "3"].includes(tipo)) {
          switch (tipo) {
            case "1":
              this.gerenciador.setEstrategiaBusca(new BuscaPorNome());
              break;
            case "2":
              this.gerenciador.setEstrategiaBusca(new BuscaPorTelefone());
              break;
            case "3":
              this.gerenciador.setEstrategiaBusca(new BuscaPorEmail());
              break;
          }

          this.rl.question("Digite o termo que deseja buscar: ", (termo) => {
            const resultados = this.gerenciador.buscar(termo);
            if (resultados.length === 0) {
              console.log("Nenhum contato encontrado.");
            } else {
              console.log("Contatos encontrados:");
              console.log(resultados.map((c) => c.toString()).join("\n"));
            }
            this.exibirMenu();
          });
        } else {
          console.log(
            "Por favor, escolha um número válido: 1 para Nome, 2 para Telefone ou 3 para Email."
          );
          this.buscarContatos();
        }
      }
    );
  }

  iniciar() {
    console.log("Bem-vindo ao Gerenciador de Contatos!");
    this.exibirMenu();
  }
}
