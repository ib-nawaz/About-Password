// Dark and Light Mode
let body = document.getElementById("body")
let moon = document.body.querySelector(".moon");
let sun = document.body.querySelector(".sun");

moon.addEventListener("click", () => {

    moon.style.display = "none";
    sun.style.display = "block";

    body.style.backgroundColor = "black";
    body.style.color = "white";
});

sun.addEventListener("click", () => {

    sun.style.display = "none";
    moon.style.display = "block";

    body.style.backgroundColor = "white";
    body.style.color = "black";
});


// Generate a Rnadom Password
let input1 = document.getElementById("inpa")
const generate = document.body.querySelector("#btn");

const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

generate.addEventListener("click", () => {

    let result = "";

    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);

        result += chars[randomIndex];
    }

    input1.value = result;
});

// Copy Paste
let copy = document.body.querySelector(".copy")
let done = document.body.querySelector(".done")
let msg = document.getElementById("msg")

copy.addEventListener("click", () => {
    copy.style.display = "none"
    done.style.display = "block"
    navigator.clipboard.writeText(input1.value)
    msg.innerText = "Copied!"
    setTimeout(() => {
        msg.innerText = ""
    }, 200)

    setTimeout(() => {
        copy.style.display = "block"
        done.style.display = "none"
    }, 1000)

});

// Show and Hide Password
let input2 = document.getElementById("inpb")

let see = document.getElementById("see")
let hide = document.getElementById("hide")
let strength = document.getElementById("strength")

see.addEventListener("click", () => {
    input2.type = "text"
    see.style.display = "none"
    hide.style.display = "block"

})

hide.addEventListener("click", () => {

    input2.type = "password"
    see.style.display = "block"
    hide.style.display = "none"
})

input2.addEventListener("input", () => {

    if (input2.value.length > 1 && input2.value.length < 3) {
        strength.innerHTML = "Your Pass is <b>Weak</b>";
    }

    if (input2.value.length > 3 && input2.value.length < 8) {
        strength.innerHTML = "Your Pass is <b>Not Strong</b>";
    }
    if (input2.value.length >= 8) {
        strength.innerHTML = "Your Pass is <b>Strong</b>"
    }

})





