// Визначаємо клас Employee
class Employee {
    constructor(id, salary) { // Конструктор класу, приймає id та salary як параметри при створенні об'єкта.
        this.id = id; // Встановлюємо властивість "id" об'єкта рівну переданому значенню "id".
        this.salary = salary; // Встановлюємо властивість "salary" об'єкта рівну переданому значенню "salary".  
    }
    // Статичний метод "compareSalary" для порівняння зарплат працівників.
    static compareSalary(employee1, employee2) {
        if (employee1.salary > employee2.salary) {
            return `User with id ${employee1.id} has greater salary`;
        } else if (employee1.salary < employee2.salary) {
            return `User with id ${employee2.id} has greater salary`;
        } else {
            return 'salaries are equal'
        }
    }
}
// Експортуємо клас Employee для використання в інших модулях.
export default Employee;