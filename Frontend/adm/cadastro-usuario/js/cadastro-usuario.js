document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const cargo = document.getElementById("cargo").value;
    const senha = document.getElementById("senha").value;

    // Validações
    if (!nome || !cpf || !email || !cargo || !senha) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (cpf.length !== 11 || isNaN(cpf)) {
      alert("O CPF deve conter exatamente 11 números.");
      return;
    }

    if (!["admin", "assistente", "perito"].includes(cargo)) {
      alert("Cargo inválido!");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado como administrador.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({
          cpf,
          email,
          nome,
          cargo,
          senha,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        form.reset();
      } else {
        alert("Erro ao cadastrar: " + (result.message || "Erro desconhecido."));
        console.error(result);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  });
});
