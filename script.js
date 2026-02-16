
document.querySelectorAll('.stack-used').forEach(container => {
    const itemsCount = container.querySelector('.scroll-col').children.length;
    const duration = itemsCount * 5;
    container.style.setProperty('--animation-duration', `${duration}s`);
});

const stacks = document.querySelectorAll('.stack');
        
function glowRandomBox() {
    stacks.forEach(box => box.classList.remove('glow'));
    const randomIndex = Math.floor(Math.random() * stacks.length);
    stacks[randomIndex].classList.add('glow');
}

setInterval(glowRandomBox, 1000);
setTimeout(glowRandomBox, 100);

document.querySelector('.nav').addEventListener("click", () => {
    document.querySelector('.body').classList.add('inactive'); 
    document.querySelector('.sidebar').classList.remove("hide")
})
document.querySelector('.x').addEventListener("click", () => {
    document.querySelector('.body').classList.remove('inactive'); 
    document.querySelector('.sidebar').classList.add("hide")
})

document.querySelectorAll('.navlink').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.body').classList.remove('inactive');
    document.querySelector('.sidebar').classList.add('hide');
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

