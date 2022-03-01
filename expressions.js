
// // オブジェクトのプロパティに
// // オブジェクトのプロパティに対して、他言語の直感通りの挙動をしない
// https://jsprimer.net/basic/loop/#for-of-statement
// const numbers = [5, 10];
// let total = 0;
// for (const num in numbers) {
//     // for...in文が列挙する配列オブジェクトのプロパティ名は、要素のインデックスを文字列化した"0"、"1"となるため
//     // 0 + "0" + "1" という文字列結合が行われる
//     total += num;
// }
// // これは想定外である。
// console.log(total); // => "001"
// // 想定通りのForLoopをしたい場合は、For..on を利用する
// total = 0;
// for (const num of numbers) {
//     total += num;
// }
// console.log(total); // => "001"


// // python の [i for i in range(10) if x % 2 == 0] 的なやつ
// // filterメソッド https://jsprimer.net/basic/loop/#array-filter
// function isEven(num) {
//     return num % 2 === 0;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array.filter(isEven)); // => [10, 20]


// // forEach高階関数
// function sum(numbers) {
//     let total = 0;
//     numbers.forEach(num => {
//         total += num;
//     });
//     return total;
// }
// sum([1, 2, 3, 4, 5]); // => 15


// // 配列にはforEachメソッドというfor文と同じように反復処理を行うメソッドがあります。
// const array = [1, 2, 3];
// array.forEach(currentValue => {
//     // 配列の要素ごとに呼び出される処理
// });


// const version = "ES6";
// switch (version) {
//     case "ES5":
//         console.log("ECMAScript 5");
//         break;
//     case "ES6":
//         console.log("ECMAScript 2015");
//         break;
//     case "ES7":
//         console.log("ECMAScript 2016");
//         break;
//     default:
//         console.log("しらないバージョンです");
//         break;
// }
// const version = "ES6";
// switch (version) {
//     case "ES5":
//         console.log("ECMAScript 5");
//     case "ES6": // 一致するケース
//         console.log("ECMAScript 2015");
//     case "ES7": // breakされないため条件無視して実行
//         console.log("ECMAScript 2016");
//     default:    // breakされないため条件無視して実行
//         console.log("しらないバージョンです");
// }
// /*
//  "ECMAScript 2015"
//  "ECMAScript 2016"
//  "しらないバージョンです"
//  と出力される
//  */

// // ブロックで終わらない文なので、セミコロンが必要
// if (true) console.log(true);
// // ブロックで終わる文なので、セミコロンが不要
// if (true) {
//     console.log(true);
// }