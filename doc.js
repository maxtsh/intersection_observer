// *** How to initialize Intersection Observer inside your application.

// Options which are actually optional and you can pass into your intersection observer instance
const options = {
  root: document.querySelector(".root"),
  // Root element that you want to act like observer,
  rootMargin: "0px",
  // roots margin
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  // array of thresholds which are points that your element that is being observed is coming in or out of obervation area
};

// Target element which we want to be observed
const targetElement = document.querySelector(".target");

// Whenever the target meets a threshold specified for the IntersectionObserver,
// the callback is invoked. The callback receives a list of IntersectionObserverEntry objects and the observer
// You can define this callback inside the IntersectionObserver() instance or out side like below
function callback(enteries, observer) {
  enteries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time

    if (entry.intersectionRatio > 0.5) {
      // Do something with entry.target or ...
    } else {
      // Do something else with entry.target or ...
    }
  });
}

// Creating instance of IntersectionObserver
const observer = new IntersectionObserver(callback, options);
// Observing method inside of instance will observ the target element
observer.observe(targetElement);
