import fetch from "node-fetch";

//Функція для виконання GET запиту
export async function get(url) {
    try {
        const response = await fetch(url); //Виконуємо GET запит за вказаною URL
        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`);
        }
        const data = await response.json(); //Десеріалізуємо JSON відповідь у JavaScript об'єкт
        return data; //Повертаємо отримані дані
    } catch (error) {
        console.error(`GET request failed: ${error.message}`);
        throw error;
    }
}

//Функція для виконання POST запиту з JSON даними
export async function post(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST", //Встановлюємо метод запиту POST
            headers: {
                "Content-Type": "application/json", //Встановлюємо заголовок Content-Type для JSON даних
            },
            body: JSON.stringify(data), //Перетворюємо об'єкт на JSON рядок і відправляємо його як тіло запиту
        });

        if (!response.ok) {
            throw new Error(`POST request failed with status ${response.status}`);
        }

        const responseData = await response.json(); // Десеріалізуємо JSON відповідь у JavaScript об'єкт
        return responseData; //Повертаємо отримані дані від сервера
    } catch (error) {
        console.error(`POST request failed: ${error.message}`);
        throw error;
    }
}