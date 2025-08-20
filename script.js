
// check if any data alredy exist
function check_save(){
    if (localStorage.getItem("playerscore") != null)
        return (1);
    else if (sessionStorage.getItem("playerscore") != null)
        return(2);
    else
        return (3);
}

// store if local
function update_in_local(key){
    let current = parseInt(localStorage.getItem(key)) || 0;
    localStorage.setItem(key, current + 1);
}

function init_in_local(){
    if (sessionStorage.getItem("playerscore") != null || sessionStorage.getItem("computerscore") != null){
        sessionStorage.removeItem("playerscore");
        sessionStorage.removeItem("computerscore");
    }
    localStorage.setItem("playerscore", 0);
    localStorage.setItem("computerscore", 0);
}

// store if session
function update_in_session(key){
    let current = parseInt(sessionStorage.getItem(key)) || 0;
    sessionStorage.setItem(key, current + 1);
}

function init_in_session(){
    sessionStorage.setItem("playerscore", 0);
    sessionStorage.setItem("computerscore", 0);
}

let playpaperbutton = document.querySelector(".gogame")
playpaperbutton.