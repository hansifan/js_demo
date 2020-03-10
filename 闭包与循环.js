//闭包与循环的关系
/**
 * 下例，循环中的每个迭代器在运行时都会给自己捕获一个i的副本，
 * 但是根据作用域的工作原理，尽管循环中的五个函数分别是在各个迭代器中分别定义的，
 * 但是它们都会被封闭在一个共享的全局作用域中，实际上只有一个i，结果每次都会输出5
 */
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    })
}
setTimeout(function () {
    console.log('******************************************')
});

/**
 * 解决上面的问题，在每个循环迭代中都需要一个闭包作用域，下面示例，循环中的每个迭代器都会生成一个新的作用域。
 */
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        });
    })(i)
}
setTimeout(function () {
    console.log('******************************************')
});

/**
 * 也可以使用let解决，let声明，可以用来劫持块作用域，并且在这个块作用域中声明一个变量。
 */
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    })
}