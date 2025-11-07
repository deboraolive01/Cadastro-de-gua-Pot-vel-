// Botão de ENTRAR (index.html)
const botaoEntrar = document.getElementById("botaoEntrar");
if (botaoEntrar) {
  botaoEntrar.addEventListener("click", function() {
    window.location.href = "sobre.html";
  });
}

// Botão de VOLTAR (sobre.html)
const botaoVoltar = document.getElementById("botaoVoltar");
if (botaoVoltar) {
  botaoVoltar.addEventListener("click", function() {
    window.location.href = "index.html";
  });
}

// Botão de CADASTRAR (sobre.html)
const botaoCadastrar = document.getElementById("botaoCadastrar");
if (botaoCadastrar) {
  botaoCadastrar.addEventListener("click", function() {
    alert("Produto cadastrado com sucesso!");
    // Aqui você pode futuramente salvar os dados num servidor ou localStorage
  });
}
// Função que mostra um alerta bonito (pode personalizar depois)
function mostrarAviso(mensagem) {
  alert(mensagem);
}

// === BOTÕES DE NAVEGAÇÃO ENTRE PÁGINAS ===

// Botão de ENTRAR (index.html)
const botaoentrar = document.getElementById("botaoEntrar");
if (botaoEntrar) {
  botaoEntrar.addEventListener("click", function() {
    window.location.href = "sobre.html";
  });
}

// Botão de VOLTAR (sobre.html)
const botaovoltar = document.getElementById("botaoVoltar");
if (botaoVoltar) {
  botaoVoltar.addEventListener("click", function() {
    window.location.href = "index.html";
  });
}

// Botão de CADASTRAR (sobre.html)
const botaocadastrar = document.getElementById("botaoCadastrar");
if (botaoCadastrar) {
  botaoCadastrar.addEventListener("click", function() {
    alert("Produto cadastrado com sucesso!");
  });
}

// === VALIDAÇÕES DE CAMPOS ===

// Permitir apenas números
function apenasNumeros(input) {
  input.addEventListener("input", function() {
    if (/\D/.test(this.value)) { // \D significa "qualquer coisa que não seja número"
      this.value = this.value.replace(/\D/g, ""); // remove letras
      mostrarAviso("⚠️ Este campo só aceita números.");
    }
  });
}

// Permitir apenas letras
function apenasLetras(input) {
  input.addEventListener("input", function() {
    if (/[0-9]/.test(this.value)) {
      this.value = this.value.replace(/[0-9]/g, ""); // remove números
      mostrarAviso("⚠️ Este campo só aceita letras.");
    }
  });
}

// === APLICAÇÃO DAS REGRAS ===

// index.html → login e senha
const loginInput = document.getElementById("login");
if (loginInput) apenasLetras(loginInput);

// sobre.html → campos numéricos e de texto
const numeroCampos = ["quantidade", "preco", "promocional", "codigo"];
const textoCampos = ["nome-produto", "marca", "descricao", "observacoes"];

// Aplica a regra dos números
numeroCampos.forEach(id => {
  const campo = document.getElementById(id);
  if (campo) apenasNumeros(campo);
});

// Aplica a regra das letras
textoCampos.forEach(id => {
  const campo = document.getElementById(id);
  if (campo) apenasLetras(campo);
});
