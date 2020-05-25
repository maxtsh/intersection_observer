const targets = document.querySelectorAll(".anim");

const observer = new IntersectionObserver(function (enteries) {
  enteries.forEach((entry) => {
    let element = entry.target;

    if (entry.intersectionRatio > 0) {
      element.style.animation = "fade 2s forwards ease";
    } else {
      element.style.animation = "none";
    }
  });
});

targets.forEach((target) => observer.observe(target));

const title = document.getElementById("btn");

title.addEventListener("click", function scroll() {
  const img = document.querySelector(".image");
  img.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
