document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const userValue = username.value.trim();
        const passValue = password.value.trim();

        if (userValue === "" || passValue === "") {
            message.textContent = "❌ Заполните все поля";
            message.style.color = "red";
            return;
        }

        // Сохраняем в localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.push({
            username: userValue,
            password: passValue,
            date: new Date().toLocaleString()
        });

        localStorage.setItem("users", JSON.stringify(users));

        message.textContent = "✅ Успешно! Данные сохранены.";
        message.style.color = "lightgreen";

        form.reset();
    });

});