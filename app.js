console.log("Hello, JavaScript World!");

document.addEventListener("DOMContentLoaded", () => {
    const message = document.createElement("p");
    message.textContent = "JavaScript is working!";
    document.body.appendChild(message);
});
