const keyValue = document.getElementById("keyValue");
const keyName = document.getElementById("keyName");
const digits = document.getElementById("digits");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const bubblesplat = document.getElementById("bubblesplat");

// function bubbling(bubblesplat) {

//     const zapsplat = new Audio(bubblesplat);
    
//     bubbling.play();
// };

document.addEventListener("keypress", (evt) => {
    keyValue.innerHTML = `${evt.key}`;
        section1.style.backgroundColor = "#7FFF00";
    keyName.innerHTML = `${evt.code}`;
        section2.style.backgroundColor = "#DC143C";
    digits.innerHTML = `${evt.keyCode}`;  
        section3.style.backgroundColor = "#A9A9A9";
    bubblesplat.play();

});

document.addEventListener("keyup", (evt) => {
    keyValue.innerHTML = `${evt.key}`;
        section1.style.backgroundColor = "";
    keyName.innerHTML = `${evt.code}`;
        section2.style.backgroundColor = "";
    digits.innerHTML = `${evt.keyCode}`;  
        section3.style.backgroundColor = "";
});







