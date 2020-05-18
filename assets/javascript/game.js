//Team one 

let shotsone = document.querySelector("#teamone-shoot-button")
let teamoneshots = document.querySelector("#teamone-numshots")
let goals = document.querySelector("#teamone-numgoals")




shotsone.addEventListener("click", function () {


    let newShot = Number(teamoneshots.innerHTML) + 1
    teamoneshots.innerHTML = newShot;
    if (Math.random() < 0.45) {
        console.log(' Team1 goal scroe')
        let newGoal = Number(goals.innerHTML) + 1
        goals.innerHTML = newGoal
    }

});



//Team two

let shotstwo = document.querySelector("#teamtwo-shoot-button")
let teamTwoShots = document.querySelector("#teamtwo-numshots")
let teamNum = document.querySelector("#teamtwo-numgoals")

shotstwo.addEventListener("click", function () {


    let newShot2 = Number(teamTwoShots.innerHTML) + 1
    teamTwoShots.innerHTML = newShot2;
    if (Math.random() > 0.45) {
        console.log(' Team2 goal scroe')
        let newGoal2 = Number(teamNum.innerHTML) + 1
        teamNum.innerHTML = newGoal2
    }


});


//Reset Button 

let reset = document.querySelector("#reset-button")
let resetNum = document.querySelector("#num-resets")

reset.addEventListener("click", function () {
    let clearRest = 
   
});
