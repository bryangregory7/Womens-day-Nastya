/* HEART MESSAGE */

function toggleMessage(id){
    let msg = document.getElementById(id);
    msg.style.display = msg.style.display === "block" ? "none" : "block";
}

/* NIGHT MODE */

function toggleNight(){
    document.body.classList.toggle("night");
}

/* FLOATING HEARTS */

setInterval(createHeart,800);

function createHeart(){
    const heart=document.createElement("div");
    heart.className="floating-heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    document.body.appendChild(heart);

    setTimeout(()=>{heart.remove();},8000);
}

/* PASSWORD */

function checkPassword(){
    let password=document.getElementById("pw").value;

    if(password==="10.10.2025"){
        document.getElementById("secretMessage").style.display="block";
    }else{
        alert("Wrong password ❤️");
    }
}

function unlockPhoto(inputId, photoId, password){

    let entered = document.getElementById(inputId).value;

    if(entered === password){
        document.getElementById(photoId).style.display = "flex";
    }
    else{
        alert("Wrong password ❤️");
    }
}

function flipCard(card){
    const inner = card.querySelector(".flip-card-inner");
    inner.classList.toggle("flipped");
}