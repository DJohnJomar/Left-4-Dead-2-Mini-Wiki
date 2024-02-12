let isShown = false;
const button = document.querySelector(".btnShowHide");
const tdImage = document.querySelector(".tdImage");
button.onclick = showHide;

function showHide(){
    if(isShown == false){
        button.innerText = "[Hide]";
        tdImage.style.display = "block";
    }
    if(isShown == true){
        button.innerText = "[Show]";
        tdImage.style.display = "none";
    }
    isShown = !isShown;
}