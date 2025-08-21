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
    newc.style.display = "none";
    oldc.style.display = "block";
}


function handle_movement_between_scenesf(newc, oldc){
    newc.style.display = "none";
    oldc.style.display = "flex";
}


// pick profile
let selectedChar = null ;
const heroname = document.querySelector(".heroname");
const picked_hero = document.querySelectorAll(".characters img");
let selected = picked_hero[0];
selected.classList.add("selected");
heroname.textContent = selected.dataset.name;
selectedChar = selected.dataset.name;
picked_hero.forEach(img => {
    img.addEventListener("click", ()=> {
        selected.classList.remove("selected");
        selected = img;
        selected.classList.add("selected");
        heroname.textContent = img.dataset.name;
        selectedChar = img.dataset.name;
    });
});

const putinput = document.querySelector(".putinput");
const checkbox = document.querySelector(".iinnpput");
putinput.textContent = checkbox.checked ? "Session" : "Local";




//js of the page of the game
const p_move = document.querySelector(".moves_pick");
const picked_move = document.querySelectorAll(".moves img");
let melected = picked_move[0];
melected.classList.add("selected");
p_move.textContent = melected.dataset.name;
console.log(p_move.textContent);
picked_move.forEach(img => {
    img.addEventListener("click", ()=> {
        console.log('ja hnaya')
        melected.classList.remove("selected");
        melected = img;
        melected.classList.add("selected");
        p_move.textContent = img.dataset.name;
    });
});
go.addEventListener('click', function(){
    handle_movement_between_scenesf(pickchar, papergame);
    localStorage.setItem('profile', selectedChar);
    document.querySelector('.pro').src = `img/${selectedChar.toLowerCase()}.jpg`;
    // console.log(`img/${profilePick.toLowerCase()}.jpg`);
});
// the actual game

//if a score hit 5 do that
let humanscore = 0;
let iascore = 0;
const humanscorep = document.querySelector(".playerscore");
const iascorep = document.querySelector(".compscore");
const iachat = document.querySelector(".iachat");
updatescore();

function updatescore(){
    humanscorep.textContent = "Player Score is " + humanscore;
    iascorep.textContent = "Evil IA Score is " + iascore;
}

function getComputerChoice(){
    const choices = ['fire' , 'earth', 'wind'];
    let randomCoice = Math.floor(Math.random() * choices.length);
    return choices[randomCoice];
}

function updatescore2(num, RoundNum){
    if (num === 1){
        iascore += 1;
        humanscore += 1;
        updatescore();
    }
    else if (num === 2){
        humanscore += 1;
        updatescore();
    }
    else if (num === 3){
        iascore += 1;
        updatescore();
    }
    else
        updatescore();
}


function getHumanChoice(){
    return p_move.textContent.trim().toLowerCase();
}

function Playgame(){
    let RoundNum = 0;
    humanscore = 0;
    iascore = 0;
    while (RoundNum < 5){
        playRound(RoundNum);
        RoundNum += 1;
    }
    updatescore2(4);
}

function playRound(RoundNum){
    let fight = document.querySelector(".fight_button");
    fight.addEventListener("click", function(){
        const hhumanchoice = getHumanChoice();
        const iiachoice = getComputerChoice();
        if (hhumanchoice === iiachoice){
            updatescore2(1, RoundNum);
        }
        else if ((hhumanchoice === 'wind' && iiachoice === 'earth')
            || (hhumanchoice === 'earth' && iiachoice === 'fire')
            || (hhumanchoice === 'fire' && iiachoice === 'wind')){
                updatescore2(2, RoundNum);
            }
        else{

            updatescore2(3, RoundNum);
        }
    })
}

Playgame();
