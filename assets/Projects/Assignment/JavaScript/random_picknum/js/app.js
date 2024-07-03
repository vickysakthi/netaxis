let savedNumbers= [];

document.getElementById("generate-btn").addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    document.getElementById("random-number").value = randomNumber;
});

document.getElementById('checkbox').addEventListener('click', function() {
    let savedNumber = document.getElementById('random-number').value;
    if (savedNumber) {
        savedNumbers.push(savedNumber)
        let savedNumbersDiv = document.getElementById('saved-numbers');
        let newNumberElement = document.createElement('p');
        newNumberElement.textContent = savedNumber
        savedNumbersDiv.appendChild(newNumberElement);
    }
});
function numberList(filter, Message) {
    const filteredNumbers = savedNumbers.filter(filter);
    const dataDiv = document.getElementById('data');
    if (filteredNumbers.length === 0) {
        dataDiv.innerHTML = Message;
    } else {
        dataDiv.innerHTML = filteredNumbers.join(', ');
    }
}

function isPrime(num) {
    num = Number(num);
    if(num < 2) return false;
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}


document.getElementById('odd-Num').addEventListener('click', function(){
    numberList(n => Number(n) % 2 !== 0, 'Oops!.. No odd Numbers!!!');
});

document.getElementById('even-Num').addEventListener('click', function(){
    numberList(n => Number(n) % 2 === 0, 'Oops!.. No Even Numbers!!!');
});

document.getElementById('prime-Num').addEventListener('click', function() {
    numberList(n => {
        const lastThreeDigits = Number(n.slice(-3));
        return isPrime(lastThreeDigits);
    },'Oops!.. No prime Numbers!!!');
});