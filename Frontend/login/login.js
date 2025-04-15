const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("emailInput").value;
    const senha = document.getElementById("passwordInput").value;

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
            localStorage.setItem("token", data.token);
        } else {
            alert(data.message || "Falha no login");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao tentar fazer login.");
    }
});
