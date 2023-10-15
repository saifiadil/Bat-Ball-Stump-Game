// //if-else

// console.log(5>6);

//bad ball stumps game 

let bat = document.getElementById("Bat")

bat.addEventListener('click', ()=>{
//    const userchoice = ("user choice is bat");


    //random number

    let randomnumber = Math.round((Math.random() * 3));

   const random = (`Random Number is ${randomnumber}`)

    let computerchoice;



    if(randomnumber > 0 && randomnumber <=1){
         computerchoice = 'bat';
        // console.log(`computer choice is ${computerchoice}`);
    }


    else if (randomnumber > 1 && randomnumber <=2) {
        computerchoice = "ball"
        // console.log(`computer choice is ${computerchoice}`);
        
    }

    else {

        computerchoice = 'stump';
    
    
    }

    // const computer = (`Computer choice is ${computerchoice}`);
let result;

    if (computerchoice === 'ball') {

        result = ('User Win 🏆 ');
        
    }

    else if (computerchoice === 'bat'){

       result = ("Game is Tie 😭");

    }

    else if (computerchoice === 'stump') {

       result = ('Computer Has Won 🏆');
        
    }

    alert(`User Choice is Bat, ${random}, Computer choice is ${computerchoice}, ${result}`)

})


// console.log('hello');

//ball


let ball = document.getElementById("Ball")

ball.addEventListener('click', ()=>{
//    const userchoice = ("user choice is bat");


    //random number

    let randomnumber = Math.round((Math.random() * 3));

   const random = (`random number is ${randomnumber}`)

    let computerchoice;



    if(randomnumber > 0 && randomnumber <=1){
         computerchoice = 'bat';
        // console.log(`computer choice is ${computerchoice}`);
    }


    else if (randomnumber > 1 && randomnumber <=2) {
        computerchoice = "ball"
        // console.log(`computer choice is ${computerchoice}`);
        
    }

    else {

        computerchoice = 'stump';
    
    
    }

    let result;

    if (computerchoice === 'ball') {
        result = ("Game is Tie 😭");
    }

    else if (computerchoice === 'bat') {

        result = ('Computer Has Won 🏆');


        
        
    }

    else if (computerchoice ==='stump' ) {
        result = ('User Win 🏆 ');
    }

    alert(`User Choice is Ball, ${random}, Computer choice is ${computerchoice}, ${result}`)
})

//stump


let stump = document.getElementById("stump")

stump.addEventListener('click', ()=>{
//    const userchoice = ("user choice is bat");


    //random number

    let randomnumber = Math.round((Math.random() * 3));

   const random = (`random number is ${randomnumber}`)

    let computerchoice;



    if(randomnumber > 0 && randomnumber <=1){
         computerchoice = 'bat';
        // console.log(`computer choice is ${computerchoice}`);
    }


    else if (randomnumber > 1 && randomnumber <=2) {
        computerchoice = "ball"
        // console.log(`computer choice is ${computerchoice}`);
        
    }

    else {

        computerchoice = 'stump';
    
    
    }

let result;

if (computerchoice === 'bat') {

    result = ('Computer Has Won 🏆');
    
}

else if (computerchoice === 'ball') {
    result = ('Computer Has Won 🏆 🏆');
}

else if (computerchoice === 'stump') {
    result = ("Game is Tie 😭");
}

alert(`User Choice is Stump, ${random}, Computer choice is ${computerchoice}, ${result}`)


})



