

// // in 演算子 と Object.protptype.OwnProperty の違い
// // is は基底のObjectまで探索して存在有無を返す
// // hasOwnProperty は、自オブジェクトで宣言した範囲のみを探索して存在有無を返す
// const objLet = {};
// console.log("toString" in objLet);
// console.log(objLet.hasOwnProperty("toString"));
// const objLet2 = {
//     toString() {
//         return "custom value";
//     }
// };
// console.log(objLet2.hasOwnProperty("toString"));


// // プロトタイプメソッドと同名のメソッドを継承先で宣言した場合は、
// // インスタンス側で宣言したメソッドが優先される
// // オブジェクトのインスタンスにtoStringメソッドを定義
// const objLet = {
//     toString() {
//         return "custom value";
//     }
// };
// console.log(objLet.toString()); // => "custom value"
// console.log(Object.prototype.toString == objLet.toString); // => false


// // functio, string, array などはすべてObject型を継承したオブジェクトである
// // Object はprototypeオブジェクトに組み込まれているtoStringなどのメソッドを持つ
// // このように基底クラスのメソッドを呼び出せる仕組みをプロトタイプチェーンと呼ぶ
// console.log(typeof Object.prototype.toString);
// const objLet = {
//     "key": "value"
// }
// console.log(Object.prototype.toString == objLet.toString);
