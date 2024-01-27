document.addEventListener('DOMContentLoaded', function () {
    
    const timer = document.querySelector('.main__timeline')
    const totalResult = document.querySelector('.results__total')
    const totalResult2 = document.querySelector('.header__section__headline')
    const start = document.querySelector('.header__button')
    const header = document.querySelector('header')
    const main = document.querySelector('.main')
    const mainHome = document.querySelector('.icons__home')
    const MAX_TIME = 15000; 
    let showOperation = true;
    let timerInterval;
   
    start.addEventListener('click', (e) => {
        game.start()
    })

    mainHome.addEventListener('click', (e) => {
        game.goHome()
    })

    const game = {

        start() {
            header.classList.remove('active')
            main.classList.add('active')
            const calculator = new Calculator()
            calculator.start()
        },

        goHome() {
            main.classList.remove('active')
            header.classList.add('active')
        },

        stop() {
            showOperation = false
            totalResult.innerText = new Calculator().getValue()
            totalResult2.innerText = new Calculator().getValue()
            
            localStorage.setItem('result1', new Calculator().getValue())
            const res = localStorage.getItem('result1')
        }
    };

    class Calculator {

        constructor() {
            this.number = 0
            this.number1 = document.querySelector('.operation__number1')
            this.number2 = document.querySelector('.operation__number2')
            this.operators = ['+', '-', '*', '/']
            this.actualResult = document.querySelector('.results__actual')
            
        }

        getValue() {
            return this.actualResult.innerText
        }

        chooseRandom(element) {
            let number;
            number = Math.floor(Math.random() * element);
            return number
        }

        generateRandomOperations() {
            const randomOperator = Math.floor(Math.random() * this.operators.length);
            const randomNumber1 = this.chooseRandom(10);
            this.number1.innerText = randomNumber1;
        
            const randomNumber2 = this.chooseRandom(10);
            this.number2.innerText = randomNumber2;
            this.showOperation(this.operators[randomOperator], randomNumber1, randomNumber2);
        }

        showOperation(operator, num1, num2) {
            const operations = {
                '+': add,
                '-': subtract,
                '*': multiply,
                '/': divide
            }
    
            function add(a, b) {
                return a + b
            }
    
            function subtract(a, b) {
                return a - b;
            }
    
            function multiply(a, b) {
                return a * b;
            }
    
            function divide(a, b) {
                return a / b;
            }
    
            const result = operations[operator](num1, num2)
            const resultElement = document.querySelector('.operation__result')
            resultElement.innerText = result
            if (result && showOperation) {
                this.checkUserAnswer(operator)
            }
    
        }

        checkUserAnswer(operator) {
          
            const operatorCheck = document.querySelectorAll('.userCheck')
            const score = document.querySelector('.results__actual')
        
            operatorCheck.forEach(function (el) {
                el.addEventListener('click', function (el) {
                    if (el.target.id === operator) {
                        this.number += 1
                        score.innerText = this.number
                        operator = null
                        this.render()
                        return true
                    }
                }.bind(this))
            }.bind(this))
        }

        start(){
            this.generateRandomOperations() 
            timer.classList.add('timer-start')
            startTimer()
        }

        render(){
            this.number1.innerText = ''
            this.number2.innerText = ''
            this.generateRandomOperations()
        }
    }

    function startTimer() {
        let elapsedTime = 0;
        timerInterval = setInterval(() => {
            elapsedTime += 1000; 
            if (elapsedTime >= MAX_TIME) {
                clearInterval(timerInterval); 
                game.stop()
            }
        }, 1000); 
    }
})



























