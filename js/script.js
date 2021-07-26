function preenchimentoCampos(registroC, nomeC, telC, nascC, endC, emailC) {
  let registro = document.getElementById(registroC).value;
  let nome = document.getElementById(nomeC).value;
  let tel = document.getElementById(telC).value;
  let idade = document.getElementById(nascC).value;
  let endereco = document.getElementById(endC).value;
  let email = document.getElementById(emailC).value;
  cadastrarCliente(registro, nome, tel, idade, endereco, email);
}

function preenchimentoCamposP(registroC, nomeC, categoriaP, precoP) {
  let registro = document.getElementById(registroC).value;
  let nome = document.getElementById(nomeC).value;
  let cat = document.getElementById(categoriaP).value;
  let preco = document.getElementById(precoP).value;

  cadastrarProduto(registro, nome, cat, preco);
}

function cadastrarCliente(registro, nome, tel, idade, endereco, email) {
  let clienteCadastro = {
    register: registro,
    name: nome,
    phone: tel,
    age: idade,
    adress: endereco,
    emailAdress: email,
  };
  let cadastros = localStorage.getItem("dadosCadastros");
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(clienteCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros));
  alert("O cadastro do cliente " + nome + " foi feito com sucesso!");
  location.reload();
}

function cadastrarProduto(registro, nome, cat, preco) {
  let clienteCadastro = {
    register: registro,
    name: nome,
    category: cat,
    price: preco,
  };
  let cadastros = localStorage.getItem("dadosCadastros");
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(clienteCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros));
  alert("O cadastro do produto " + nome + " foi feito com sucesso!");
  location.reload();
}

function listarCadastrosP() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h1>Consulta de Cadastros:</h1>");
  if (cadastros == null)
    document.write(
      "<h3>Ainda não há cadastros realizados para consultar.</h3>"
    );
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach((cadastro) => {
      document.write("<ul>");
      document.write("<li>Código de Registro: " + cadastro.register + "</li>");
      document.write("<li>Nome do produto: " + cadastro.name + "</li>");
      document.write("<li>Categoria: " + cadastro.category + "</li>");
      document.write("<li>Preço: " + cadastro.price + "</li>");

      document.write("</ul><p></p>");
    });
  }
}

function listarCadastrosC() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h1>Consulta de Cadastros:</h1>");
  if (cadastros == null)
    document.write(
      "<h3>Ainda não há cadastros realizados para consultar.</h3>"
    );
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach((cadastro) => {
      document.write("<ul>");
      document.write("<li>Código de Registro: " + cadastro.register + "</li>");
      document.write("<li>Nome do cliente: " + cadastro.name + "</li>");
      document.write("<li>Contado: " + cadastro.phone + "</li>");
      document.write("<li>Nascimento: " + cadastro.age + "</li>");
      document.write("<li>Endereço: " + cadastro.adress + "</li>");
      document.write("<li>Email: " + cadastro.emailAdress + "</li>");
      document.write("</ul><p></p>");
    });
  }
}

function limparStorageC(limpar) {
  localStorage.clear(limpar);
  window.location = window.location;
}

function limparStorageP(limpar) {
  localStorage.clear(limpar);
  window.location = window.location;
}
