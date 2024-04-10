let searchButton = document.getElementById("search")
let input = document.getElementById("input")
let sound = document.getElementById("sound")
const error = document.getElementById("error")

let inpWord = document.getElementById("input").value;


searchButton.addEventListener("click", () =>{
    let inpWord = document.getElementById("input").value;

    if (inpWord.length == 7) {
        sound.play()
        error.innerHTML = `<p id="error"> Thala For a Reason </p>`
    }else{
        error.innerHTML = `<p id="error"> Try Again, Enter 7 Letter Word </p>`
    }

})
