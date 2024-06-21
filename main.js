let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let box6 = document.querySelector(".box6")
let box7 = document.querySelector(".box7")
let box8 = document.querySelector(".box8")
let box9 = document.querySelector(".box9")
resetBtn = document.querySelector(".resetBtn")


let h1 = document.querySelectorAll("h1")
let h4 = document.querySelector("h4")

let boxes = document.querySelectorAll(".box")


function all(){
count = 0
let one = "false"
var hai = "false"

box1.addEventListener("click",()=>{clicked(0)
    check()
    hai = "true"
     one = "true"
},{once : one})
box2.addEventListener("click",()=>{clicked(1)
    check()
    one = "true"
},{once : one})
box3.addEventListener("click",()=>{clicked(2)
    check()
    one = "true"
},{once : one})
box4.addEventListener("click",()=>{clicked(3)
    check()
    one = "true"
},{once : one})
box5.addEventListener("click",()=>{clicked(4)
    check()
    one = "true"
},{once : one})
box6.addEventListener("click",()=>{clicked(5)
    check()
    one = "true"
},{once : one})
box7.addEventListener("click",()=>{clicked(6)
    check()
    one = "true"
},{once : one})
box8.addEventListener("click",()=>{clicked(7)
    check()
    one = "true"
},{once : one})
box9.addEventListener("click",()=>{clicked(8)
    check()
    one = "true"
},{once : one})

function clicked(num){
    if(count%2 == 1)
        {
           boxes[num].innerText = "X"  
            count++
        }else if(
            count%2 == 0
        ){
            boxes[num].innerText = "O" 
            count++
        }else{}
}
function check(){
if(box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X")
    {
        h4.innerText = "Player X won"
       

    }else if(box4.innerText == "X" && box5.innerText == "X" && box6.innerText == "X")
    {
        h4.innerText = "Player X won"

    }else if(box7.innerText == "X" && box8.innerText == "X" && box9.innerText == "X")
    {
        h4.innerText = "Player X won"

    }else if(box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X")
        {
            h4.innerText = "Player X won"
        }else if(box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X")
            {
                h4.innerText = "Player X won"
            } else if(box3.innerText == "X" && box6.innerText == "X" && box9.innerText == "X")
                {
                    h4.innerText = "Player X won"
                } else if(box1.innerText == "X" && box5.innerText == "X" && box9.innerText == "X")
                    {
                        h4.innerText = "Player X won"
                    } else if(box3.innerText == "X" && box5.innerText == "X" && box7.innerText == "X")
                        {
                            h4.innerText = "Player X won"
                        } else if(box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X")
    {
        h4.innerText = "Player X won"

    }else if(box4.innerText == "X" && box5.innerText == "X" && box6.innerText == "X")
    {
        h4.innerText = "Player X won"

    }else if(box7.innerText == "X" && box8.innerText == "X" && box9.innerText == "X")
    {
        h4.innerText = "Player X won"

    }else if(box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X")
        {
            h4.innerText = "Player X won"
        }else if(box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X")
            {
                h4.innerText = "Player X won"
            } else if(box3.innerText == "X" && box6.innerText == "X" && box9.innerText == "X")
                {
                    h4.innerText = "Player X won"
                } else if(box1.innerText == "X" && box5.innerText == "X" && box9.innerText == "X")
                    {
                        h4.innerText = "Player X won"
                    } else if(box3.innerText == "X" && box5.innerText == "X" && box7.innerText == "X")
                        {
                            h4.innerText = "Player X won"
// X section ended

                        } else if(box1.innerText == "O" && box2.innerText == "O" && box3.innerText == "O")
                            {
                                h4.innerText = "Player O won"
                        
                            }else if(box4.innerText == "O" && box5.innerText == "O" && box6.innerText == "O")
                            {
                                h4.innerText = "Player O won"
                        
                            }else if(box7.innerText == "O" && box8.innerText == "O" && box9.innerText == "O")
                            {
                                h4.innerText = "Player O won"
                        
                            }else if(box1.innerText == "O" && box4.innerText == "O" && box7.innerText == "O")
                                {
                                    h4.innerText = "Player O won"
                                }else if(box2.innerText == "O" && box5.innerText == "O" && box8.innerText == "O")
                                    {
                                        h4.innerText = "Player O won"
                                    } else if(box3.innerText == "O" && box6.innerText == "O" && box9.innerText == "O")
                                        {
                                            h4.innerText = "Player O won"
                                        } else if(box1.innerText == "O" && box5.innerText == "O" && box9.innerText == "O")
                                            {
                                                h4.innerText = "Player O won"
                                            } else if(box3.innerText == "O" && box5.innerText == "O" && box7.innerText == "O")
                                                {
                                                    h4.innerText = "Player O won"
                                                }else if(
                                                    (box1.innerText == "O" || box1.innerText == "X") &&  (box2.innerText == "O" || box2.innerText == "X") &&  (box3.innerText == "O" || box3.innerText == "X") &&  (box4.innerText == "O" || box4.innerText == "X") &&  (box5.innerText == "O" || box5.innerText == "X") &&  (box6.innerText == "O" || box6.innerText == "X") &&  (box7.innerText == "O" || box7.innerText == "X") &&  (box8.innerText == "O" || box8.innerText == "X") && 
                                                    (box9.innerText == "O" || box9.innerText == "X" )
                                                ){
                                                         h4.innerText = "Match  Tie"
                                                }else{}
                                                                 
}
}
resetBtn.addEventListener("click",()=>{
    resetBtn.innerText = "Reset"
    box1.innerText = box2.innerText = box3.innerText = box4.innerText = box5.innerText = box6.innerText = box7.innerText = box8.innerText = box9.innerText = h4.innerText =  ""
    all()
    console.log(count);
})

