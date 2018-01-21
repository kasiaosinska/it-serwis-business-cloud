
console.log('aaaaa')

var numbers = document.querySelectorAll('.num');
var operators = document.querySelectorAll('.operator');
var clear = document.getElementById('clear');
var equal = document.getElementById('equal');
var calcArea = document.getElementById('calc-area');
var alert = document.getElementById('alert');
var output = 0;
var operator;

console.log('aaaaa')
console.log(numbers);
console.log(operators);
console.log(clear);
console.log(equal);
console.log(calcArea);

for(var i = 0; numbers.length > i; i++) {
    numbers[i].addEventListener('click', function () {
        var num = this.innerText;

        if (output.length > 18) {
            alert.innerHTML = "Nie można wpisać więcej cyfr";
        }
        else {
            output = calcArea.innerHTML += num;
        }

    })
}

clear.addEventListener('click', function () {
    calcArea.innerHTML = '';
    alert.innerHTML = '';
});

for(var j = 0; operators.length > j; j++) {
    operators[j].addEventListener('click', function () {
        operator = this.innerText;
        if (calcArea.innerHTML === '') {
            calcArea.innerHTML = calcArea.innerHTML.concat('')
        }
        else if (output) {
            var lastEl = calcArea.innerHTML.substr(calcArea.innerHTML.length-1);
            if (lastEl === '+' || lastEl === '-' || lastEl === '*' || lastEl === '/') {
                calcArea.innerHTML = calcArea.innerHTML.concat('')
            }
            else {
                calcArea.innerHTML = calcArea.innerHTML.concat(operator)
            }
        }
    })
}

equal.addEventListener('click', function () {
    if(calcArea.innerHTML === output) {
        var dividedEl = output.indexOf('/');
        var elAfterDivided = dividedEl + 1;

        if (dividedEl !== -1 && output.substr(elAfterDivided, 1) === '0') {
            alert.innerHTML = "Nie można dzielić przez 0!";
        }
        else {
            calcArea.innerHTML = eval(output);
        }
    }

    else {
        calcArea.innerHTML = '';
    }
});