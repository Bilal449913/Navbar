var x = document.getElementById('butt');

// function Button(){
//     x.style.backgroundColor = 'red';
// }

function Button() {
    var button = document.getElementById("butt");
    
    // Add a class to trigger the animation
    button.classList.add("animate");

    // Remove the class after a short delay to allow the animation to complete
    setTimeout(function() {
        button.classList.remove("animate");
    }, 1000); // Adjust the delay as needed
}


document.addEventListener("DOMContentLoaded", function() {
    // Add a class to trigger the animation
    document.querySelector(".navbar").classList.add("animate-navbar");
});
