/* 1. Використовуючи колекцію Set написати функцію, яка перевірить чи всі елементи в масиві, який передається 
як аргумент, є унікальними та поверне як результат true або false */

function areAllUnique(arr) {
  // Створюємо Set з елементів масиву, що автоматично відфільтрує дублікати
  const uniqueElementsSet = new Set(arr);

  // Перевіряємо, чи розмір Set дорівнює розміру масиву. Якщо так, то всі елементи унікальні.
  return uniqueElementsSet.size === arr.length;
}

console.log(areAllUnique([1, 4, 6, 7])); // виведе true
console.log(areAllUnique([1, 4, 6, 1, 7])); // виведе false

/* 2. Дано масив імен [ "Alex", "Bob", "Peter", "Annie"]. За допомогою колекції Map дати кожному з елементів 
масиву унікальний числовий ідентифікатор (починаючи з 1ці) та повернути створену колекцію Map. */

function addIds(names) {
  // Створюємо нову колекцію Map для зберігання зв'язків ім'я - ідентифікатор
  const idMap = new Map();
  //Лічильник для генерації унікальних ідентифікаторів
  let idCounter = 1;

  // Проходимося по кожному імені в масиві
  for (const name of names) {
      // Додаємо зв'язок між ім'ям та ідентифікатором в колекцію Map
      idMap.set(name, idCounter);
      // Збільшуємо лічильник для наступного ідентифікатора
      idCounter++;
  }
  // Повертаємо створену колекцію Map з ідентифікаторами
  return idMap;
}

console.log(addIds(["Alex", "Bob", "Peter", "Annie"])); // виведе Map(4) { 'Alex' => 1, 'Bob' => 2, 'Peter' => 3, 'Annie' => 4 }

/* 3. Дано обʼєкт obj з двома числовими властивостями та двома методами add та subtract
які відповідно додають або віднімають властивості. Необхідно написати функцію, яка прийме
як параметри сам обʼєкт та назву метода і перевірить чи наявний метод у цьому обʼєкту.
Якщо метод наявний - функція поверне результат його роботи, якщо ні - 
поверне текст "There no such function in object" */
const obj = {
  a: 5,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};

function checkMethodAvaliability(obj, methodName) {
  // Перевіряємо, чи метод існує у властивостях об'єкта
  if (typeof obj[methodName] === 'function') {
      // Викликаємо метод і повертаємо його результат
      return obj[methodName]();
  } else {
      return "There's no such function in object"
  }
}

console.log(checkMethodAvaliability(obj, "add")); // виведе 7
console.log(checkMethodAvaliability(obj, "subtract")); // виведе 3
console.log(checkMethodAvaliability(obj, "multiply")); // виведе There no such function in object

/* 4. Дано обʼєкт obj1 з двома числовими властивостями та двома методами add та subtract
які відповідно додають або віднімають властивості. Необхідно написати функцію що створить новий обʼєкт, 
який успадкує прототип обʼєкту obj1, розширить його функціонал методами multiply та divide 
та поверне цей новий обʼект. */
const obj1 = {
  a: 5,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};

function inheritanceWithExpandedMethods(obj1) {
  // Створюємо новий об'єкт, успадкований від obj1
  const extendedObj = Object.create(obj1);

  // Додаємо метод multiply до нового об'єкту
  extendedObj.multiply = function () {
      return this.a * this.b;
  };

  // Додаємо метод divide до нового об'єкту
  extendedObj.divide = function () {
      return this.a / this.b;
  };

  // Повертаємо новий об'єкт
  return extendedObj;
}

console.log(inheritanceWithExpandedMethods(obj1).multiply()); // виведе 10
console.log(inheritanceWithExpandedMethods(obj1).divide()); // виведе 2.5
console.log(inheritanceWithExpandedMethods(obj1).add()); // виведе 7
console.log(inheritanceWithExpandedMethods(obj1).subtract()); // виведе 3
