const symbols = ["<", ">", "{", "}", "/", "=", "()", "=>", "#", "$", "%", "&", "*", "+", "-", ":", ";", "?", "@", "^", "_", "~"];
 
const container = document.querySelector(".code-bg");
 
for (let i = 0; i < 80; i++) {
    const span = document.createElement("span");
 
    span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
 
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = Math.random() * 25 + 18 + "px";
    span.style.animationDuration = Math.random() * 20 + 15 + "s";
    span.style.opacity = Math.random() * 0.5 + 0.2;
 
    container.appendChild(span);
}