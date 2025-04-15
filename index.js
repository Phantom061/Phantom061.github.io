const solution = 'ADIEU'.split('')

function inputChange() {
    let input = document.getElementById('input').value
    input = String(input)
    input = input.toUpperCase()
    input = input.split('')
    if (input.length != 5) {
        return
    }

    const versuch = document.getElementById('versuche').innerHTML.split(': ')[1]
    let checkedInput = checkSolution(input)

    for (let i = 1; i < 6; i++) {
        if (checkedInput[i-1] == 1) {
            document.getElementById(versuch + '-' + i).style.backgroundColor = 'rgb(255, 196, 0)'
            document.getElementById(versuch + '-' + i).style.borderColor = 'rgb(255, 196, 0)'
        } else if (checkedInput[i-1] == 2) {
            document.getElementById(versuch + '-' + i).style.backgroundColor = 'rgb(9, 255, 0)'
            document.getElementById(versuch + '-' + i).style.borderColor = 'rgb(9, 255, 0)'
        }
        document.getElementById(versuch + '-' + i).innerHTML = input[i - 1]
    }
    document.getElementById('input').value = ''

    if (input.join('') == solution.join('')) {
        document.getElementById('input').style.display = "none"
        document.getElementById('gewonnen').style.display = 'block'
        return
    }

    if (versuch == "5") {
        document.getElementById('input').style.display = "none"
        document.getElementById('gewonnen').innerHTML = 'Du hast verloren'
        document.getElementById('gewonnen').style.display = 'block'
    }
    if (versuch != "5") {
        counter = parseInt(versuch)
        counter++
        document.getElementById('versuche').innerHTML = 'Versuch: ' + counter
    }
}

function checkSolution(input) {

    let remainingLetters = ['', '', '', '', '']
    let checkedInput = [0, 0, 0, 0, 0]
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] == input[i]) {
            checkedInput[i] = 2
        } else {
            remainingLetters[i] = solution[i]
        }
    }

    for (let i = 0; i < input.length; i++) {
        if (checkedInput[i] == 0 && remainingLetters.includes(input[i])) {
            const position = remainingLetters.indexOf(input[i])
            checkedInput[i] = 1
            remainingLetters[position] = ''
        }
    }

    return checkedInput;
}