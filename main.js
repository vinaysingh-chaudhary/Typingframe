// fetching elements
const showSentence = document.querySelector('.to-type-sentence'); 

const typingArea = document.querySelector('.text-area'); 

const startButton = document.querySelector('.start-button'); 

const result = document.querySelector('.typing-speed-result'); 



// sentence to type
const sentence = [ 
        'I am the architect of my life, I built its foundation and will choose its contents.',
        'I am grateful for the abundance that I have and the abundance thats on its way. ',
        'I continue to climb higher, there are no limits to what I can achieve.',
        'I let go of old, negative beliefs that have stood in the way of my success.',
        'I take pride in my ability to make worthwhile contributions to the world.']


let startTime, endTime, timeTaken; 


// tying measurment formul
const calculateTypingSpeed = (time_Taken) => {
    let allWord = typingArea.value.trim(); 
    let noSpaceWords = allWord=== '' ? 0 :  allWord.split(" ").length;  

    if (noSpaceWords !==0){
        let resultSpeed = (noSpaceWords / time_Taken ) *60; 
        resultSpeed = Math.round(resultSpeed); 
    result.innerHTML = `Your Typing speed is : ${resultSpeed} WPM,  Total Words/min : ${noSpaceWords},  Time taken by You :  ${time_Taken} seconds`;
    } else {
        result.innerHTML =`After typing in above box, press on "DONE" to get results`;
    }
} 

// sentence funtion
const startTyping = ( )=> {
    let randomNumber = Math.floor(Math.random() * sentence.length);
    showSentence.innerHTML = sentence[randomNumber]; 
    
    let date = new Date(); 
    startTime = date.getTime();

    startButton.innerText = "Done"; 
}


// result funtion
const showResult = ( ) => {
    startButton.innerText= "Start";  

    let date = new Date(); 
    endTime = date.getTime();

    timeTaken = (endTime - startTime) / 1000; 

    calculateTypingSpeed(timeTaken);

    showSentence.innerHTML = "";  
    typingArea.value = "";
}

// eventlistener for button functioning 
startButton.addEventListener('click' , () =>{
   switch(startButton.textContent.toLowerCase()){
        case "start" : 
            typingArea.removeAttribute('disabled'); 
            startTyping(); 
            break; 

        case "done" : 
           typingArea.setAttribute('disabled', 'true'); 
           showResult(); 
           break; 
   }
})