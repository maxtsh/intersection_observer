function getThreshholds() {
  let thresholds = [];
  thresholds.push(0);
  for (let i = 1.0; i <= 20; i++) {
    thresholds.push(i / 20);
  }
  return thresholds;
}

let options = {
  root: document.querySelector(".child"),
  rootMargin: "0px",
  threshold: getThreshholds(),
};

let prevRatio;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

function callback(enteries, observer) {
  enteries.forEach((entry) => {
    let elem = entry.target;

    console.log(elem);
    console.log(entry.intersectionRatio);

    if (entry.intersectionRatio > prevRatio) {
      elem.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio
      );
    } else {
      elem.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio
      );
    }
    prevRatio = entry.intersectionRatio;
  });
}

let observer = new IntersectionObserver(callback, options);
let singleTarget = document.getElementById("box-2");
observer.observe(singleTarget);
// let targets = document.querySelectorAll(".box");
// targets.forEach((target) => observer.observe(target));
