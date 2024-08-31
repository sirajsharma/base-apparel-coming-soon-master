const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const submitBtnNode = document.getElementById("submit-email-btn");
const emailNode = document.getElementById("email");
const errorIconNode = document.getElementById("email-error-icon");
const errorMsgNode = document.getElementById("email-error");

submitBtnNode?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (emailNode === null) return;

  if (!EMAIL_PATTERN.test(emailNode.value)) {
    errorIconNode.style.display = "block";
    errorMsgNode.style.visibility = "visible";
    emailNode.classList.add("hero__email--error");
  } else {
    errorIconNode.style.display = "none";
    errorMsgNode.style.visibility = "hidden";
    emailNode.classList.remove("hero__email--error");
  }
});
