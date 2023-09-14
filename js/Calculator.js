export class Calculator {
    constructor() {
        this.actions = ['+', '-', '*', '/', '^'];
        this.history = [];
    }
    isCorrectAction(action) {
        return this.actions.includes(action);
    }
    getHistoryAsString() {
        return this.history.join('\n');
    }
    add(num1, num2) {
        // 1. zamień wartości przekazane przez parametr na typ number
        // 2. sprawdź czy są one poprawne
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    }
}





const calc = new Calculator();
console.dir(calc)
let action, promptContent, isCorrectAction, number1, number2;
// do { 
//     promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
//     promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
//     promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

//     action = prompt(promptContent);
//     isCorrectAction = calc.isCorrectAction(action);
//     if(isCorrectAction) {
//         number1 = prompt('Podaj liczbę nr 1');
//         number2 = prompt('Podaj liczbę nr 2');

//         if(action === '+') {
//             calc.add(number1, number2);
//         }
//     }
    
// } while(calc.isCorrectAction(action));


