const textElement = document.querySelector(".animate");

const textload = () => {
    const texts = ["Front End Developer ", "Student ", "Freelancer ", "Event Coordinator "];
    let currentIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        // Get the current text to display
        const currentText = texts[currentIndex];

        // Update the text content with the current substring
        textElement.textContent = currentText.slice(0, currentCharIndex);

        // Adjust typing/deleting speed
        const typingSpeed = isDeleting ? 50 : 100;

        // Update character index
        if (!isDeleting) {
            currentCharIndex++;
        } else {
            currentCharIndex--;
        }

        // If the word is fully typed, pause, then start deleting
        if (currentCharIndex === currentText.length && !isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
            return;
        }

        // If the word is fully deleted, move to the next word
        if (currentCharIndex === 0 && isDeleting) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length; // Cycle through texts
        }

        setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();
};

textload();

//projects button
const but1=document.getElementById("pbutton1");
const but2=document.getElementById("pbutton2");
but1.addEventListener("click",()=>{
    window.open("https://github.com/CodeAbhiram/Air-Quality-Checker", "_blank");
    console.log("hello");
})
but2.addEventListener("click",()=>{
    window.open("https://github.com/CodeAbhiram/dietplanner.github.io", "_blank");

})
