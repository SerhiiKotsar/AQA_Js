// Імпортуємо клас "Employee" з іншого модуля, для успадкування його властивостей та методів.
import Employee from './employee.js';
// Визначаємо клас "Dev", який успадковує клас "Employee".
class Dev extends Employee {
    #jobType = 'Dev'; //Приватна властивість jobType для Dev
    
    constructor(id, salary) { // Конструктор класу "Dev", приймає id та salary як параметри при створенні об'єкта.
        super(id, salary); // Викликаємо конструктор класу "Employee" за допомогою "super", передаючи "id" та "salary".

        //Зробимо властивість id незмінною та унеможливимо її видалення
        Object.defineProperty(this, 'id', {
            value: id, // Значення "id" встановлюється при створенні об'єкта
            writable: false, // Забороняє зміну "id"
            configurable: false, // Забороняє видалення "id"
        });
    }
    // Метод "getJobType()" повертає рядок, що містить інформацію про посаду розробника.
    getJobType() {
        return 'I am a ' + this.#jobType;
    }
    // Статичний метод "returnArrayOfDevs" приймає невизначену кількість об'єктів "args".
    static returnArrayOfDevs(...args) {
        const devArray = []; // Створюємо пустий масив для зберігання об'єктів класу "Dev".
        for (const obj of args) { // Перебираємо передані об'єкти.
            if (obj instanceof Dev) { // Якщо об'єкт є екземпляром класу "Dev"...
                devArray.push(obj); // Додаємо об'єкт до масиву.
            }
        }
        return devArray; // Повертаємо масив об'єктів класу "Dev".
    }
}
// Експортуємо клас "Dev" для використання в інших модулях.
export default Dev;
