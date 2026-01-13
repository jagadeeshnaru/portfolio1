// Typing Effect
const text = "Naru Jagadeesh";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 120);
    }
}
type();

// Skills animation
document.getElementById("skillsLink").addEventListener("click", function() {
    let skills = document.getElementById("skills");
    skills.classList.remove("hidden");
    skills.classList.add("show");
});