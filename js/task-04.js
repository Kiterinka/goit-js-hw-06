const button = {
    sub: document.querySelector("[data-action='decrement']"),
    add: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value"),
};
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
};
function decrement() {
     counterValue += -1;
    button.span.textContent = counterValue;
};
button.add.addEventListener("click", increment);
button.sub.addEventListener("click", decrement);
