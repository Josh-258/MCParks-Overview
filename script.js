const messageButton = document.querySelector("#message-button");
const message = document.querySelector("#message");
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

messageButton.addEventListener("click", () => {
  message.textContent = "Your JavaScript is working. Happy building!";
});
