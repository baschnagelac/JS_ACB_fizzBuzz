function getValues() {
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    let count = 100;


    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    count = parseInt(count);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(count)) {
        let numbersArray = generateFizzBuzz(fizzValue, buzzValue, count);

        //then display them on the page
        displayFizzBuzz(numbersArray, fizzValue, buzzValue);

        //if they are not, tell our user!

    } else {
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for Hundo!'
            }
        );
        let values = generateFizzBuzz(fizzValue, buzzValue, count);

        displayFizzBuzz(values);
    }
}




//generate our numbers 
//logic function

function generateFizzBuzz(fizz, buzz, end) {
    let fizzBuzzValues = [];

    for (let i = 1; i <= end; i++) {

        let value = i;

        if (value % fizz == 0 && value % buzz == 0) {
            value = 'FizzBuzz';
        } else if (value % buzz == 0) {
            value = 'Buzz';
        } else if (value % fizz == 0) {
            value = 'Fizz';
        }

        fizzBuzzValues.push(value);
    }
    return fizzBuzzValues;
}


function displayFizzBuzz(fizzBuzzes) {
    let resultsDiv = document.getElementById('results');

    let resultsHtml = '';

    for (let i = 0; i < fizzBuzzes.length; i++) {
        let fizzBuzzValue = fizzBuzzes[i];
        let className = '';

        if (fizzBuzzValue == 'Fizz') {
            className = 'fizz';
        } else if (fizzBuzzValue == 'Buzz') {
            className = 'buzz';
        } else if (fizzBuzzValue == 'FizzBuzz') {
            className = 'fizzbuzz';
        }

        resultsHtml += `<div class="col ${className}">${fizzBuzzValue}</div>`;
    }
    resultsDiv.innerHTML = resultsHtml;
}








