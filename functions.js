// const func2 = (x, ...y) => {
//     console.log(`${x}, ${y[0]}, ${y[1]}asd`);
// }
// func2(1, 2, 3);

// const funcName = (x, y) => {
//     console.log(`${x}, ${y} asd`);
// }
// funcName(1, 2);

// // // 空のオブジェクトにメソッドを代入することができる ES2015~
// const obj = {
//     method() {
//         return "additional method.";
//     }
// };
// console.log(obj.method()); // => "this is method"


// // 空のオブジェクトにメソッドを代入することができる
// const obj = {};
// obj.method = function () {
//     console.log("additional method.")
// }
// obj.method();


// // オブジェクトのプロパティである関数をメソッドと呼ぶ
// // 関数とメソッドに機能差はない
// const obj = {
//     method1: function () {
//         console.log("method1");
//     },
//     method2: () => {
//         console.log("method2");
//     }
// };
// obj.method1();
// obj.method2();


// // 匿名関数を、宣言とともにコールバック関数として引数に渡す記述例
// // このような記述は、非同期処理で多用される
// const array = [1, 2, 3];
// array.forEach((value) => {
//     console.log(value);
// });


// // 高階関数 引数に関数を渡すことができる関数やメソッド
// // コールバック関数 引数に渡される関数やメソッド
// // この例では forEachが高階関数, outputがコールバック関数である
// const array = [1, 2, 3];
// const output = (value) => {
//     console.log(value);
// };
// array.forEach(output);

// // Arrow functionとしてCallback関数の宣言をする場合の記述。
// // 記述量が少ない
// const array = [1, 2, 3];
// const doubleArray = array.map(value => value * 2);
// console.log(doubleArray);


// Callback function
// 配列のmapメソッドは、配列の要素を順番にコールバック関数へ渡し、そのコールバック関数が返した値を新しい配列にして返します。
// const array = [1, 2, 3];
// const doubleArray = array.map(function (value) {
//     console.log("calbacked, value is:" + value);
//     return value * 2;
// })
// console.log(doubleArray);


// // Arrow function (必ず匿名関数の宣言となる。)
// const func1 = () => { console.log("func1 called.") };
// const func2 = (x, y) => { console.log("func2 " + String(x) + String(y) + " called.") };
// func1();
// func2("X", "Y");
// const mulA = x => { return x * x };
// console.log(mulA(2));
// const mulB = x => x * x;
// console.log(mulB(3));


//// 匿名関数。関数式で宣言する際は関数名がなくても良い
// const myFunc = function () {
//     console.log("this function called noname.")
// };
// myFunc();


//// 第一級であるため関数式を宣言できる
// const myFunc = function () {
//     console.log("this function called.");
// };
// myFunc();

//// 関数は第一級である
// function fn() {
//     console.log("this function called.");
// }
// const myFunc = fn;
// myFunc();


//// 分割代入は、オブジェクトだけではなく配列でもOK
// function printUserID([first, second]) {
//     console.log(first);
//     console.log(second);
// }
// const vectorData = [1, 2];
// print(printUserID(vectorData));

//// 代入演算子（=）におけるオブジェクトの分割代入では、左辺に定義したい変数を定義し、右辺のオブジェクトから対応するプロパティを代入していました。 関数の仮引数が左辺で、関数に渡す引数を右辺と考えるとほぼ同じ構文であることがわかります。
// const user = {
//     id: 42
// };
// const { id } = user;
// function printUserID({ id }) {
//     return id
// }
// console.log(printUserID(user));


// // 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
// function printUserID({ id }) {
//     return id
// }
// const user = {
//     id: 42
// }
// console.log(printUserID(user));

// // 分割代入
// function printUserId(user) {
//     console.log(user.id); // => 42
// }
// const user = {
//     id: 42
// };
// printUserId(user);


// //restargs
// function fn(arg1, ...rest) {
//     console.log(arg1);
//     console.log(rest);
// }
// fn(1, 2, 3, 4)

// //可変長引数
// function fn(...args) {
//     // argsは引数の値が順番に入った配列
//     console.log(args); // => ["a", "b", "c"]
// }
// fn("a", "b", "c");

// function double(num) {
//     return num * 2;
// }
// // `double`関数の返り値は、`num`に`10`を入れて`return`文で返した値
// console.log(double(10)); // => 20