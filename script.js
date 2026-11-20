"use strict";

// Завдання 1. Підключення JavaScript
console.log("JavaScript успішно підключено!");

// Завдання 2. Створення змінних різних типів
const studentName = "Вікторія";
let age = 17;
const averageGrade = 10.5;
const isStudent = true;
let notAssigned;
const emptyValue = null;
const bigInteger = 9007199254740993n;
const uniqueId = Symbol("studentId");

console.log("\nЗавдання 2. Змінні та їх типи:");
const variables = { studentName, age, averageGrade, isStudent, notAssigned, emptyValue, bigInteger, uniqueId };
for (const [name, value] of Object.entries(variables)) {
  console.log(`${name}:`, value, "| typeof:", typeof value);
}

// Завдання 3. Перетворення типів даних
console.log("\nЗавдання 3. Перетворення типів:");
const conversions = [
  ["125", "number", Number],
  ["15.75", "number", Number],
  [250, "string", String],
  [true, "string", String],
  ["false", "boolean", Boolean],
  [0, "boolean", Boolean],
  [1, "boolean", Boolean],
  [null, "number", Number],
  ["45px", "number", Number],
  ["12.5kg", "number", Number]
];
for (const [original, targetType, convert] of conversions) {
  const result = convert(original);
  console.log("Початкове:", original, `(${typeof original})`, "→", targetType, "→", result, `(${typeof result})`);
}

// Завдання 4. Арифметичні операції
console.log("\nЗавдання 4. Арифметичні операції:");
const firstString = "25";
const secondString = "5";
const firstNumber = Number(firstString);
const secondNumber = Number(secondString);
console.log("Сума:", firstNumber + secondNumber);
console.log("Різниця:", firstNumber - secondNumber);
console.log("Добуток:", firstNumber * secondNumber);
console.log('Без перетворення "25" + "5":', firstString + secondString);
console.log("Пояснення: оператор + з двома рядками виконує конкатенацію, тому результат — 255, а не 30.");

// Завдання 5. Дослідження перетворення типів
console.log("\nЗавдання 5. Дослідження перетворення типів:");
const experiments = [
  ['Number("hello")', Number("hello"), "Рядок не є числом, тому результат NaN."],
  ['Number("")', Number(""), "Порожній рядок перетворюється на 0."],
  ['Boolean("0")', Boolean("0"), "Непорожній рядок є true, навіть якщо це символ 0."],
  ['Boolean("")', Boolean(""), "Порожній рядок перетворюється на false."],
  ['String(null)', String(null), 'Значення null перетворюється на рядок "null".'],
  ['"10" + 5', "10" + 5, "Оператор + об'єднує рядок і число в рядок 105."],
  ['"10" - 5', "10" - 5, "Оператор - перетворює рядок на число, результат 5."],
  ['typeof null', typeof null, 'Результат object — історична особливість JavaScript.']
];
for (const [expression, result, explanation] of experiments) {
  console.log(`${expression} →`, result, `(${typeof result}). ${explanation}`);
}
