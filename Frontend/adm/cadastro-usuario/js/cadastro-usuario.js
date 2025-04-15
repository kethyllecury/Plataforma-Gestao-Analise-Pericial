document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const cpf = document.getElementById("cpf").value.trim();
      const email = document.getElementById("email").value.trim();
      const cargo = document.getElementById("cargo").value;
      const senha = document.getElementById("senha").value;
  
      if (!cpf || !email || !cargo || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
  
      if (cpf.length !== 11 || isNaN(cpf)) {
        alert("O CPF deve conter 11 números.");
        return;
      }
  
      if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
      }
  
      console.log("Cadastro realizado:", { cpf, email, cargo, senha });
      alert("Usuário cadastrado com sucesso!");
      form.reset();
    });
  });
  
  