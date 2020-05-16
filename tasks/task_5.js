// debugger;

const checkForSpam = function (message) {
    // твой код
    const words = message.split(' ');

    // console.log(words);

    const sale = words.includes('sale');


    if (sale) {
        return true;
    } else {
        return false;
    }


};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false/

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true