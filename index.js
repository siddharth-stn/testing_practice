
function capitalize (str) {
    let stringToArray = str.split(" ");
    let finalStringArray = [];
    stringToArray.forEach(element => {
        let firstLetterUppercase = element.slice(0,1).toUpperCase();
        let otherLetterLowercase = element.slice(1).toLowerCase();
        finalStringArray.push(firstLetterUppercase + otherLetterLowercase);
    });
    return  finalStringArray.join(" ");
}

function reverseString (str) {
    let mainStrArr = str.split(" ");
    let finalArr = [];
    mainStrArr.forEach(element => {
        let stringArray = element.split("");
        let newArr = [];
        stringArray.forEach(element => {
            newArr.unshift(element);
        });    
        finalArr.push(newArr.join(""));
    });
    return finalArr.join(" ");
}

function add (num1, num2) {
    return num1 + num2; 
}

function subtract (num1, num2) {
    return num1 - num2; 
} 

function divide (num1, num2) {
    return num1/ num2; 
} 

function multiply (num1, num2) {
    return num1 * num2;
}

const calculator = {
    add, 
    subtract,
    divide, 
    multiply
}

function caesarCipher (str) {
    let strArr = str.split("");
    strArr.forEach((element, index) => {
        let nextLetter;
        if (element !== 'Z' && element !== 'z') {
            nextLetter = String.fromCharCode(element.charCodeAt(element.length -1) + 1);
            strArr[index] = nextLetter;
        } else if (element === 'Z') {
            strArr[index] = 'A';
        } else if (element === 'z') {
            strArr[index] = 'a';
        }
    });
    return strArr.join("");
}

function analyzeArray (arr) {
    const sum = arr.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    const average = sum/arr.length;
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average,
        min,
        max,
        length
    }
}


export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}