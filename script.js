// ///////////hadhci tanhandli bih save
// // check if any data alredy exist
// function check_save(){
//     if (localStorage.getItem("playerscore") != null)
//         return (1);
//     else if (sessionStorage.getItem("playerscore") != null)
//         return(2);
//     else
//         return (3);
// }

// // store if local
// function update_in_local(key){
//     let current = parseInt(localStorage.getItem(key)) || 0;
//     localStorage.setItem(key, current + 1);
// }

// function init_in_local(){
//     if (sessionStorage.getItem("playerscore") != null || sessionStorage.getItem("computerscore") != null){
//         sessionStorage.removeItem("playerscore");
//         sessionStorage.removeItem("computerscore");
//     }
//     localStorage.setItem("playerscore", 0);
//     localStorage.setItem("computerscore", 0);
// }

// // store if session
// function update_in_session(key){
//     let current = parseInt(sessionStorage.getItem(key)) || 0;
//     sessionStorage.setItem(key, current + 1);
// }

// function init_in_session(){
//     sessionStorage.setItem("playerscore", 0);
//     sessionStorage.setItem("computerscore", 0);
// }


// ////////////////////////////////////////////


// /////////////////////// move beteeen plans
const maindiv = document.querySelector(".page-content-1");
const neworctn = document.querySelector(".neworctn");
const playpaperbutton = document.querySelector(".gogame");
const go_back = document.querySelector(".go_back");
const newgameb = document.querySelector(".newgameb");
const contentb = document.querySelector(".continueb");

const pickchar = document.querySelector(".pickchar");

const go_back2 = document.querySelector(".goback");
const go = document.querySelector(".go");

const papergame = document.querySelector(".papergame")



go_back2.addEventListener('click', function(){
    handle_movement_between_scenes(pickchar, neworctn);
});

go.addEventListener('click', function(){
    handle_movement_between_scenes(pickchar, papergame);
});

playpaperbutton.addEventListener('click', function(){
    handle_movement_between_scenes(maindiv, neworctn);
});

go_back.addEventListener('click', function(){
     handle_movement_between_scenes(neworctn, maindiv)
});

newgameb.addEventListener('click', function(){
    handle_movement_between_scenes(neworctn, pickchar)
});

function handle_movement_between_scenes(newc, oldc){
    console.log('ja hnaya')
    newc.style.display = "none";
    oldc.style.display = "block";
}


// pick profile
const heroname = document.querySelector(".heroname");
const picked_hero = document.querySelectorAll(".characters img");
let selected = picked_hero[0];
selected.classList.add("selected");
heroname.textContent = selected.dataset.name;
picked_hero.forEach(img => {
    img.addEventListener("click", ()=> {
        selected.classList.remove("selected");
        selected = img;
        selected.classList.add("selected");
        heroname.textContent = img.dataset.name;
    });
});

const putinput = document.querySelector(".putinput");
const checkbox = document.querySelector(".iinnpput");
putinput.textContent = checkbox.checked ? "Session" : "Local";

checvement_between_scenes(maindiv, neworctn);kbox.addEventListener("change", () => {
    if (checkbox.checked){
        putinput.textContent = "Session";
    }
    else{
        putinput.textContent = "Local";
    }
});


// go to lanch the game -> khassni n initi lhza9 kamel 9bel manmchi liha

//js of the page of the game
const p_move = document.querySelector(".moves_pick");
const picked_move = document.querySelectorAll(".moves img");
let melected = picked_move[0];
melected.classList.add("selected");
p_move.textContent = melected.dataset.name;
picked_move.forEach(img => {
    img.addEventListener("click", ()=> {
        melected.classList.remove("selected");
        melected = img;
        melected.classList.add("selected");
        p_move.textContent = img.dataset.name;
    });
});