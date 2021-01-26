// Задача 1. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно,
// чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// 10 – четное число

for (let i = 0; i <= 10; i++) {

    let result = i % 2;
    let message = i + ' - это четное число';

    if (i === 0) {
        message = i + ' - это ноль';
    } else if (result === 1) {
        message = i + ' - это нечетное число';
    }

    console.log(message);
}

// Задача 2. Выведите в консоль значения, указанные рядом с комментариями:

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: [
                {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            ]
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: [
                {
                    likes: 3,
                    dislikes: 1
                }
            ]
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating[0].dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задача 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000,
    }
];

let discount = 15;

products.forEach(function (product) {
    product.price = makeDiscount(product.price, discount)
})

console.log(products);

/**
 * Расчет цены со скидкой
 * @param  {number} price цена
 * @param {number} discount размер скидки в процентах
 * @returns {number} цена со скидкой
 */
function makeDiscount(price, discount) {
    return price - (price / 100 * discount)
}

// Задача 4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
// https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

//Получаем все товары, у которых есть фотографии.
console.log('Получаем все товары, у которых есть фотографии.');

let result = products1.filter(function (product) {
    return Array.isArray(product.photos) && product.photos.length > 0;
});

console.log(result);

//Сортируем массив товаров по цене (от низкой цены к высокой)
console.log('Сортируем массив товаров по цене (от низкой цены к высокой)');

products1.sort(function (a, b) {
    return a.price - b.price;
});

console.log(products1);

//Задача 5. 5 (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа
// от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
// for(…){/* здесь пусто */}

for (let a = 0; checkCondition(a); a++) {
}
function checkCondition(a) {
    console.log(a);
    return a < 9;
}

//Задача 6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:

let rows = 20;
let row = '';

for (let a = 0; a < rows; a++) {
    console.log(row += 'x');
}
