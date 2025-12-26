
document.querySelectorAll('.stack-used').forEach(container => {

    const itemsCount = container.querySelector('.scroll-col').children.length;
    const duration = itemsCount * 5;
    container.style.setProperty('--animation-duration', `${duration}s`);

});

const stacks = document.querySelectorAll('.stack');
        
        // Function to make a random box glow
        function glowRandomBox() {
            // Remove glow from all boxes first
            stacks.forEach(box => box.classList.remove('glow'));
            
            // Pick a random box
            const randomIndex = Math.floor(Math.random() * stacks.length);
            stacks[randomIndex].classList.add('glow');
        }
        
        // Start the animation automatically
        setInterval(glowRandomBox, 1000);
        
        // Make first box glow immediately
        setTimeout(glowRandomBox, 100);
