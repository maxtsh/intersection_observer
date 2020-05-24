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
