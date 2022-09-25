const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
  }

  const formDataObj = {
    email: email.value,
    password: password.value,
  };

  console.log(formDataObj);
  event.currentTarget.reset();
}
