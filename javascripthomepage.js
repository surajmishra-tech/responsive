
const texts = [
    "Trusted By +1250 People For Leads -",
    "EMPIRES BOOST LEADS SOLUTION"
];

let textIndex = 0;
let charIndex = 0;

const textElement = document.getElementById("text");

function typeWriter() {

    if (charIndex < texts[textIndex].length) {

        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeWriter, 100);

    } else {

        setTimeout(() => {

            textElement.innerHTML = "";
            charIndex = 0;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }

            typeWriter();

        }, 100);

    }
}

typeWriter();





// <!-- <script>
// const text = "Trusted By +1250 People For Leads - EMPIRESBOOST";
// let i = 0;

// function typeWriter() {
//   if (i < text.length) {
//     document.getElementById("text").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, 100); // speed control
//   }
// }

// typeWriter(); -->



 const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        item.classList.toggle("active");

        const icon = question.querySelector(".icon");

        if(item.classList.contains("active")){
            icon.textContent = "−";
        }else{
            icon.textContent = "+";
        }

    });

});

document.querySelectorAll(".faq-item").forEach(item => {

    const icon = item.querySelector(".icon");

    if(item.classList.contains("active")){
        icon.textContent = "−";
    }else{
        icon.textContent = "+";
    }

});

function goPage(card, url){
    card.classList.add('active-card');

    setTimeout(function(){
        window.location.href = url;
    }, 600);


}

// function loadVideo(box){
//     box.innerHTML = `
//     <iframe


//         width=100%;
//         src="https://www.youtube.com/embed/bssHp5ksHWY?autoplay=1"
//         title="YouTube video player"
//         frameborder="0"
//         allow="autoplay; encrypted-media"
//         allowfullscreen>
//     </iframe>`;}

function loadVideo(box){

    const img = box.querySelector("img");
    const btn = box.querySelector(".play-btn");
    const frame = box.querySelector(".video-frame");

    // hide thumbnail instantly
    img.style.display = "none";
    btn.style.display = "none";

    // show iframe FIRST (but empty)
    frame.style.display = "block";

    // IMPORTANT: set a blank first to avoid flash
    frame.src = "";

    // small delay before loading video
    setTimeout(() => {
        frame.src = "https://www.youtube.com/embed/bssHp5ksHWY?autoplay=1&mute=1";
    }, 100);
}

