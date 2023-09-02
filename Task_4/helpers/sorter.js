// Функція приймає масив об'єктів "devs" для сортування.
function sortBySalary(devs) {
    // Використовуємо метод "sort()" масиву з порівнянням двох елементів "a" та "b".
    return devs.sort((a, b) => {
        // Якщо зарплати об'єктів "a" та "b" рівні...
        if (a.salary === b.salary) {
            // Порівнюємо їхні id і повертаємо різницю.
            // Це впорядковує об'єкти за зростанням id, якщо зарплати однакові.
            return a.id - b.id;
        }
        // Якщо зарплати об'єктів "a" та "b" не рівні, порівнюємо їхні зарплати і повертаємо різницю.
        // Це впорядковує об'єкти за зростанням зарплати.
        return a.salary - b.salary;
    });
}

export default sortBySalary;