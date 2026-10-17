const step = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const reviewName = document.querySelector("#reviewName");
const reviewEmail = document.querySelector("#reviewEmail");
const finishBtn = document.querySelector("#finishBtn");
const reviewBtn = document.querySelector("#reviewBtn");
const nextbtn = document.querySelector("#nextBtn");
const backBtn = document.querySelector("#backBtn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

nextbtn.addEventListener("click", () => {
  sessionStorage.setItem("name", nameInput.value);
  sessionStorage.setItem("email", emailInput.value);

  step.style.display = "none";
  step2.style.display = "block";
});
backBtn.addEventListener("click", () => {
  step.style.display = "block";
  step2.style.display = "none";
});

reviewBtn.addEventListener("click", () => {
  reviewName.textContent = "Name: " + sessionStorage.getItem("name");
  reviewEmail.textContent = "Email: " + sessionStorage.getItem("email");

  step2.style.display = "none";
  step3.style.display = "block";
});
finishBtn.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload();
});