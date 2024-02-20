// Задание 1. Выведите все элементы массива с индексами, которые делятся на 3. Количество элементов массива равно n.

const n = 10;

const array = Array.from({ length: n }, (_, index) => index);

array.forEach((element, index) => {
    if (index % 3 === 0) {
        console.log(`Index ${index}: ${element}`);
    }
});

// Задание 2. Выведите все четные элементы массива. Количество элементов массива равно n.

const n = 10;

const array = Array.from({ length: n }, (_, index) => index);

array.forEach((element) => {
    if (element % 2 === 0) {
        console.log(element);
    }
});

// Задание 3. Дан массив, состоящий из слов. Замените первую букву каждого слова на заглавную. Вывести результат в виде строки.

const words = ['Itadori', 'Yo Assakura', 'Sukuna', 'Rika'];

const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

const result = capitalizedWords.join(' ');

console.log(result);

// Задание 4. Дана строка. Поменяйте местами первую и последнюю букву каждого слова.
// Используйте методы split и join. Например, s="В лесу родилась елочка" -> s1= “В уесл ьодиласр алочке”

const s = "В лесу родилась елочка";

const s1 = s.split(' ').map(word => {
    if (word.length > 1) {
        return word[word.length - 1] + word.slice(1, -1) + word[0];
    } else {
        return word;
    }
}).join(' ');

console.log(s1);

// Задание 5. Сформируйте массив, состоящий из вещественных чисел.
// Выведите положительные элементы массива на экран. Определите количество положительных элементов массива. Найти произведение отрицательных элементов массива.

let numbers = [3.5, -2.8, 1.2, -4.6, 5.1, -0.9];

let positiveNumbers = numbers.filter(num => num > 0);
console.log("Положительные элементы массива:", positiveNumbers);

let numPositive = positiveNumbers.length;
console.log("Количество положительных элементов в массиве:", numPositive);

let negativeNumbers = numbers.filter(num => num < 0);
let productNegative = negativeNumbers.reduce((acc, num) => acc * num, 1);
console.log("Произведение отрицательных элементов массива:", productNegative);

// Задание 6. В массиве целых чисел определить число инверсий.
// Инверсией называется пара элементов, в которой большее число расположено слева от меньшего. Например, 24 35 29 44 8 22 4 содержит 3 инверсии.

function countInversions(arr) {
    let inversionsCount = 0;

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] > arr[j]) {
                inversionsCount += 1;
            }
        }
    }

    return inversionsCount;
}

let numbers = [24, 35, 29, 44, 8, 22, 4];

let inversions = countInversions(numbers);
console.log("Количество инверсий в массиве:", inversions);

// Задание 7. Разработайте программу, в которой существуют два массива с ростом игроков двух команд (в см). Определить, имеются ли в данных командах игроки одинакового роста.

function checkSameHeight(team1, team2) {
    let sameHeight = false;

    for (let height1 of team1) {
        for (let height2 of team2) {
            if (height1 === height2) {
                sameHeight = true;
                break;
            }
        }
        if (sameHeight) {
            break;
        }
    }

    return sameHeight;
}

let teamA = [180, 175, 190, 185];
let teamB = [170, 185, 195, 180];

let hasSameHeight = checkSameHeight(teamA, teamB);

if (hasSameHeight) {
    console.log("В командах есть игроки одинакового роста.");
} else {
    console.log("В командах нет игроков одинакового роста.");
}

// Задание 8. Разработайте программу, которая определяет, имеется ли в заданном целочисленном массиве arr(10) хотя бы одна пара совпадающих по значению элементов.

function checkDuplicatePair(arr) {
    let foundDuplicate = false;
    let seenElements = {};

    for (let i = 0; i < arr.length; i += 1) {
        if (seenElements[arr[i]]) {
            foundDuplicate = true;
            break;
        } else {
            seenElements[arr[i]] = true;
        }
    }

    return foundDuplicate;
}

let numbers = [3, 7, 2, 5, 7, 8, 1, 4, 2, 9];

let hasDuplicatePair = checkDuplicatePair(numbers);

if (hasDuplicatePair) {
    console.log("В массиве есть хотя бы одна пара совпадающих элементов.");
} else {
    console.log("В массиве нет пар совпадающих элементов.");
}

// Задание 9. Создать двумерный массив размерностью 3 строки на 3 столбца. Посчитать сумму элементов двумерного массива.

function createRandomArray(rows, columns) {
    let array = [];
    for (let i = 0; i < rows; i += 1) {
        array[i] = [];
        for (let j = 0; j < columns; j += 1) {
            array[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return array;
}

function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            sum += array[i][j];
        }
    }
    return sum;
}

let twoDArray = createRandomArray(3, 3);

console.log("Двумерный массив:");
console.table(twoDArray);

let sum = sumArrayElements(twoDArray);

console.log(`Сумма всех элементов в двумерном массиве: ${sum}`);

// Задание 10. Создать двумерный массив размерностью 4x3. Посчитать количество цифр, значение которых меньше 10.

function createRandomArray(rows, columns) {
    let array = [];
    for (let i = 0; i < rows; i += 1) {
        array[i] = [];
        for (let j = 0; j < columns; j += 1) {
            array[i][j] = Math.floor(Math.random() * 20);
        }
    }
    return array;
}

function countNumbersLessThanTen(array) {
    let count = 0;
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            if (array[i][j] < 10) {
                count += 1;
            }
        }
    }
    return count;
}

let twoDArray = createRandomArray(4, 3);

console.log("Двумерный массив:");
console.table(twoDArray);

let count = countNumbersLessThanTen(twoDArray);

console.log(`Количество цифр, значение которых меньше 10: ${count}`);

// Задание 11. Создать двумерный массив размерностью 4x4. Выведите индексы максимального элемента массива.

function createRandomArray(rows, columns) {
    let array = [];
    for (let i = 0; i < rows; i += 1) {
        array[i] = [];
        for (let j = 0; j < columns; j += 1) {
            array[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return array;
}

function findMaxIndex(array) {
    let maxElement = -Infinity;
    let maxIndex = [0, 0];
    
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            if (array[i][j] > maxElement) {
                maxElement = array[i][j];
                maxIndex = [i, j];
            }
        }
    }
    
    return maxIndex;
}

let twoDArray = createRandomArray(4, 4);

console.log("Двумерный массив:");
console.table(twoDArray);

let maxIndex = findMaxIndex(twoDArray);

console.log(`Индексы максимального элемента в массиве: [${maxIndex[0]}, ${maxIndex[1]}]`);