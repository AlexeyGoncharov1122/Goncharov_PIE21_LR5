alert("Пользователь вводит целые положительные числа M (чётное), N (оба до десяти). Программа формирует матрицу\
       размера M х N из\
       случайных чисел в диапазоне от 10 до 99. Затем программа меняет местами верхнюю и нижнюю половины матрицы.");
let M;
// Проверка M на соответствие условиям: целое, положительное и чётное до десяти
do {
    M = prompt("Введите M:", 4);
} while (M / (Math.round(M)) != 1 || M > 10 || M < 1 || M % 2 == 1);

// Проверка N на соответствие условиям: целое и положительное до десяти
let N;
do {
    N = prompt("Введите N", 3);
} while (N / (Math.round(N)) != 1 || N > 10 || N < 1);

let list_MxN = [];   // Изначальный массив MxN
let MxN_copy = [];   // Массив для записи значений list_MxN в строку
// Заполнение двумерного массива MxN числами в соответствии с условием
for (let i = 0; i < M; i++) {
    list_MxN.push([]);
    for (let j = 0; j < N; j++) {
        list_MxN[i].push(Math.floor(Math.random() * (99 - 10 + 1)) + 10);
    }
    MxN_copy.push(list_MxN[i].join(', '));   // Преобразование вложенных массивов в строки
}
MxN_copy = MxN_copy.join("\n                                         "); // Разбиение на строки для вывода матрицы
// Перестановка верхней и нижней половин матрицы
let list_MxN_new = list_MxN;
for (let i = 0; i < M / 2; i++) {
    [list_MxN_new[i], list_MxN_new[i + M / 2]] = [list_MxN_new[i + M / 2], list_MxN_new[i]];
}
// Преобразование вложенных массивов в строки
for (let i = 0; i < M; i++) {
    list_MxN_new[i] = list_MxN_new[i].join(', ');
}
list_MxN_new = list_MxN_new.join("\n                                    "); // Разбиение на строки для вывода матрицы
alert("M = " + M + ", N = " + N + "\nИзначальный массив = [" + MxN_copy + "]" +
      "\nКонечный массив = [" + list_MxN_new  + "]");