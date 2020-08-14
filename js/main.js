let runningTotal = 0;
let inputNum = document.querySelector('#num');
let totalElement = document.querySelector('#newTotal');


document.getElementById('addButton').addEventListener('click', addCalculate);
document.getElementById('subtractButton').addEventListener('click', subtractCalculate);



// Functions
function init() {
    runningTotal = 0;
    inputNum.value = '1'
    render()
}

function render(){
   if (runningTotal > 0) {
       totalElement.innerHTML = runningTotal;
   } else if (runningTotal < 0 ) {
       totalElement.innerHTML = runningTotal;
       totalElement.style = "red"
   }
}

function addCalculate() { 
        let num = parseInt(inputNum.value);
        runningTotal = parseInt(num + runningTotal);
        inputNum.value = "1"
        render() 
        console.log(addCalculate)
        console.log(runningTotal)
    }

function subtractCalculate() { 
        let num = parseInt(inputNum.value);
        runningTotal = parseInt((num * -1) + runningTotal);
        inputNum.value = "1"
        render() 
        console.log(subtractCalculate)
        console.log(runningTotal)
}

      

init();
