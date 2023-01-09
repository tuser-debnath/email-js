const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");
  const errorInput = document.getElementById("error-text");
  const formInput = document.getElementById("form-data");

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    formInput.innerHTML = "Form Submitted Successfully";
    errorInput.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    emailjs.send(
      "service_personal",
      "template_k55rebn",
      templateParams,
      "7PqATduA0kVqa9ePn"
    );
  } else {
    errorInput.innerHTML = "Please fill all the form";
    formInput.innerHTML = "";
  }
});
