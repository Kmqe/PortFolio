const list_icons = document.getElementById("list_icons");
const ul = document.querySelector("header ul");
const skillElements = document.querySelectorAll(".skill-element");

const social_links = document.querySelectorAll(".social_link");

list_icons.addEventListener("click", () => {
  list_icons.classList.toggle("active");
  ul.classList.toggle("show");
});

skillElements.forEach((skill) => {
  const percentage = parseInt(
    skill.querySelector(`.skill-percentage`).innerText
  );
  const skillProgress = skill.querySelector(".skill-progress");
  skillProgress.style.width = `${percentage}%`;
  console.log(percentage);
});

social_links.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    removeActive();
    ele.classList.add("active");
    ele.lastElementChild.classList.add("active");
  });
});

function removeActive() {
  social_links.forEach((ele) => {
    ele.classList.remove("active");
    ele.lastElementChild.classList.remove("active");
  });
}
