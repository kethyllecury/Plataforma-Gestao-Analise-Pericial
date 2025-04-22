const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("emailInput").value.trim();
    const senha = document.getElementById("passwordInput").value.trim();

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login bem-sucedido!");
            console.log("Token recebido:", data.token);

            // Salva token e cargo no localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("cargo", data.cargo);

            // Redireciona conforme o cargo
            if (data.cargo === "admin") {
                window.location.href = "/Frontend/adm/cadastro-usuario/cadastro-usuario.html";
            } else {
                window.location.href = "pagina-principal.html"; //precisa trocar para outra tela caso não seja ADM
            }
        } else {
            alert(data.message || "Falha no login");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao tentar fazer login.");
    }
});
