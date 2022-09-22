var addBtn = document.getElementsByTagName("button")[0]
var  addBtn2 = document.getElementsByTagName("button")[1]
var removeBtn =document.getElementsByTagName("button")[2]
var input = document.getElementById("n1 value")
var scoreLimit = document.querySelector("#limit")


var p1Score = 0
var p2Score = 0 
var limit= 10
var gameOver = false;

var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");


addBtn.addEventListener("click", function(){
    // Didina skaiciu
    if (!gameOver){
        p1Score ++;
        p1Display.textContent = p1Score;
        if (p1Score === limit){
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
});



addBtn2.addEventListener("click", function(){
    // Didina skaiciu
    if (!gameOver){
        p2Score ++;
        p2Display.textContent = p2Score;
        if (p2Score === limit){
            p2Display.classList.add("winner2");
            gameOver = true;
        }
    }
});

removeBtn.addEventListener("click", function(){
   
    p1Score = 0;
    p1Display.innerText = p1Score
    gameOver = false;
    
})

removeBtn.addEventListener("click", function(){
   
    p2Score = 0;
    p2Display.innerText = p2Score
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner2");
})



input.addEventListener("change", function() {
    scoreLimit.textContent = this.value;
    limit = Number(this.value);
})



