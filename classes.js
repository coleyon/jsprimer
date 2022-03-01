"use strict";



// class SampleClass {
//     propa = "";
//     constructor(value) {
//         this.propa = "initial value";
//     }
//     get propa() {
//         return this.value;
//     }
//     set propa(newValue) {
//         this.value = newValue;
//     }
// }
// const x = new SampleClass();
// console.log(x.propa)


// 検索対象となる文字列
// const str = "???";
// // replaceメソッドに文字列を指定した場合は、最初に一致したものだけが置換される
// console.log(str.replace("?", "!")); // => "!??"
// // replaceAllメソッドに文字列を指定した場合は、一致したものがすべて置換される
// console.log(str.replaceAll("?", "!")); // => "!!!"
// // replaceメソッドの場合は、正規表現の特殊文字はエスケープが必要となる
// console.log(str.replace(/\?/g, "!")); // => "!!!"
// // replaceAllメソッドにも正規表現を渡せるが、この場合はエスケープが必要となるためreplaceと同じ
// console.log(str.replaceAll(/\?/g, "!")); // => "!!!"

// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/;
// // gフラグなしでは、最初の結果のみを含んだ特殊な配列を返す
// const results = str.match(alphabetsPattern);
// console.log(results.length); // => 1
// // マッチした文字列はインデックスでアクセスできる
// console.log(results[0]); // => "ABC"
// // マッチした文字列の先頭のインデックス
// console.log(results.index); // => 0
// // 検索対象となった文字列全体
// console.log(results.input); // => "ABC あいう DE えお"