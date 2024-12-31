let Frames = document.getElementsByClassName("frame");
let wkText = document.getElementsByClassName("working_zone-text");
let firstMotion = true;
let Motion = 0;

const default_style = {
    "background-color": "rgb(0, 170, 255",
    "font-size": "32px",
    "pointer-events": "all",
    "filter": "blur(0px)"
}

const win_style = {
    "background-color": "red",
    "font-size": "56px"
}

const draw_style = {
    "background-color": "rgb(194, 197, 255)",
    "font-size": "16px",
    "filter": "blur(5px)"
}

const text_style_defualt = {
    "visibility": "hidden",
    "color": "rgb(0, 0, 0)",
    "background-color": "aliceblue",
}

const text_style_win = {
    "visibility": "visible",
    "color": "rgb(255, 255, 255)",
    "background-color": "rgb(77, 255, 0)",
}

const text_style_draw = {
    "visibility": "visible",
    "color": "rgb(255, 255, 255)",
    "background-color": "gray",
}

function clickActive(el) {
    if (el.textContent == "") {
        if (firstMotion == true) {
            el.textContent = "❌";
            firstMotion = false;
        }
        else if (firstMotion == false) {
            el.textContent = "⭕";
            firstMotion = true;
        }

        ValueWin = checkWin()

        if (ValueWin == true) {
            Motion = 0
            turnOfFrames()
            for (let n in text_style_win) {
                for (let Text of wkText) {
                    Text.style[n] = text_style_win[n]
                    Text.textContent = "ПОБЕДА"
                }
            }
        }
        else if (ValueWin == false){
            Motion = 0
            turnOfFrames()
            for (let i=0; i < Frames.length; i ++) {
                for (let n in draw_style) {
                    Frames[i].style[n] = draw_style[n]
                }
            }
            for (let n in text_style_draw) {
                for (let Text of wkText) {
                    Text.style[n] = text_style_draw[n]
                    Text.textContent = "НИЧЬЯ"
                }
            }
        }
    } else {
        console.log("Error");
    }
}

function checkWin() {
    let Values_Frames = [];
    Motion ++

    for (let i=0; i < Frames.length; i++) {
        Values_Frames.push(Frames[i].textContent);
    }
    
    if (Values_Frames[0] == Values_Frames[1] && Values_Frames[1] == Values_Frames[2] && Values_Frames[2] != "") {
        return colorWinner("012")
    }
    else if (Values_Frames[3] == Values_Frames[4] && Values_Frames[4] == Values_Frames[5] && Values_Frames[5] != "") {
        return colorWinner("345")
    }
    else if (Values_Frames[6] == Values_Frames[7] && Values_Frames[7] == Values_Frames[8] && Values_Frames[8] != "") {
        return colorWinner("678")
    }
    else if (Values_Frames[0] == Values_Frames[3] && Values_Frames[3] == Values_Frames[6] && Values_Frames[6] != "") {
        return colorWinner("036")
    }
    else if (Values_Frames[1] == Values_Frames[4] && Values_Frames[4] == Values_Frames[7] && Values_Frames[7] != "") {
        return colorWinner("147")
    }
    else if (Values_Frames[2] == Values_Frames[5] && Values_Frames[5] == Values_Frames[8] && Values_Frames[8] != "") {
        return colorWinner("258")
    }
    else if (Values_Frames[6] == Values_Frames[4] && Values_Frames[4] == Values_Frames[2] && Values_Frames[2] != "") {
        return colorWinner("642")
    }
    else if (Values_Frames[0] == Values_Frames[4] && Values_Frames[4] == Values_Frames[8] && Values_Frames[8] != "") {
        return colorWinner("048")
    }
    else if (Motion == 9){
        return false
    }
}

function colorWinner(number) {
    for (let i of number) {
        for (let n in win_style) {
            Frames[i].style[n] = win_style[n]
        }
    }
    for (let i=0; i < Frames.length; i++) {
        Frames[i].style["filter"] = "blur(5px)"
    }
    return true
}

function turnOfFrames() {
    for (let i=0; i < Frames.length; i++) {
        Frames[i].style["pointer-events"] = "none"
    }
}

function restart() {
    Motion = 0
    for (let i = 0; i < Frames.length; i++) {
        Frames[i].textContent = "";
        for (let n in default_style) {
            Frames[i].style[n] = default_style[n]
        }
    }
    for (let n in text_style_defualt) {
        for (let Text of wkText) {
            Text.style[n] = text_style_defualt[n]
            Text.textContent = ""
        }
    }
}