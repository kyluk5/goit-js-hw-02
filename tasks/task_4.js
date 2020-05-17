const formatString = function (string) {
    // твой код
    let result = string;
    let length = result.length;
    let format = 40;

    for (let leng of result) {
        if (length > format) {
            let formated = result.substr(0, 40);
            const dot = ('...');
            let ready = formated + dot;
            return ready;

        } else {
            return result;
        }
    }

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// вернется форматированная строка