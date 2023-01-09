const counter = {
    sub: document.querySelector("[data-action='decrement']"),
    add: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value"),
};
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    counter.span.textContent = counterValue;
};
function decrement() {
     counterValue += -1;
     counter.span.textContent = counterValue;
};
counter.add.addEventListener("click", increment);
counter.sub.addEventListener("click", decrement);
