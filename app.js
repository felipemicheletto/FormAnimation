function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  const hearts = document.querySelectorAll(".fa-heart");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validatePassword(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      // get rid of animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      location.reload();
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    error("rgb(189,87,87)");
    message("Invalid username");
  } else {
    error("rgb(87,189,130)");
    message("Enter your email address");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(87,189,130)");
    message("Enter your password");
    return true;
  } else {
    error("rgb(189,87,87)");
    message("Invalid email syntax");
  }
}

function validatePassword(user) {
  if (user.value.length < 6) {
    error("rgb(189,87,87)");
    message("Password incorrect");
  } else {
    error("rgb(87,189,130)");
    message("WELCOME!");
    return true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

function message(msg) {
  const instructionMessage = document.querySelector(".instruction");
  instructionMessage.textContent = msg;
}

animatedForm();
