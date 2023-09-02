// Імпортуємо клас "Employee" з іншого модуля, для успадкування його властивостей та методів.
import Employee from './employee.js';
// Визначаємо клас "PM", який успадковує клас "Employee".
class PM extends Employee {
    #jobType = 'PM'; //Приватна властивість jobType для PM
    // Метод "getJobType()" повертає рядок, що містить інформацію про посаду PM.
    getJobType() { 
        return 'I am a ' + this.#jobType;
    }
}
// Експортуємо клас "PM" для використання в інших модулях.
export default PM;