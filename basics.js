// // 暗黙の型変換はヤベー。これを予測するのは難しい
// const x = 1, y = "2", z = 3;
// console.log(x + y + z); // => "123"
// console.log(y + x + z); // => "213"
// console.log(x + z + y); // => "42"


// // 異なる型である場合に暗黙的な型変換が行われる
// console.log(1 == "1"); // => true
// console.log(0 == false); // => true
// console.log(10 == ["10"]); // => true
// 曖昧さによるバグを懸念する場合は、評価には常に厳密等価演算子（===）を使うべき
// console.log(1 === "1"); // => false
// console.log(0 === false); // => false
// console.log(10 === ["10"]); // => false


// // 式1、式2、式3の順に評価され、式3の評価結果を返します。
// const a = 1, b = 2, c = a + b;
// console.log(c); // => 3


// function addPrefix(text, prefix) {
//     const pre = typeof prefix === "string" ? prefix : "default_prefix:";
//     return pre + text;
// }
// console.log(addPrefix("xxx"));
// console.log(addPrefix("xxx", "custom_prefix:"));

// console.log(true ? "a" : "b");
// console.log(false ? "a" : "b");


// // Nullish coalescing演算子(??)は、
// // 左辺の値がnullishであるならば、右辺の評価結果を返します。
// //  nullishとは、評価結果がnullまたはundefinedとなる値のことです。
// console.log(null ?? "it is nullish");
// console.log(undefined ?? "it is nullish");
// console.log(0 ?? "it is nullish");
// console.log(false ?? "it is nullish");


// if (true && true) {
//     console.log("true");
// }
// if (false || true) {
//     console.log("true");
// }
// if (!true) {
//     console.log("false");
// } else {
//     console.log("true");
// }

// const obj = {
//     "k": "v"
// }
// const newObj = obj;
// console.log(newObj);
// console.log(obj == newObj);
// console.log(obj === newObj);

// const arr = [1, 2];
// const [x, y] = arr;
// console.log(x);
// console.log(y);


// console.log(0b1111 & 0b1001);
// console.log(0b1111 | 0b1001);
// console.log(0b1111 ^ 0b1001);

// console.log(0 == '0');
// console.log(0 === '0');

// console.log(0 == false);
// console.log(0 === false);


// console.log(0 == null);
// console.log(0 === null);

// console.log(undefined == null);
// console.log(undefined === null);


// let num = 1;
// console.log(+"1024.213a" == NaN);

// 1;
// const total = 42 + 42; // => 84
// console.log(total);
// const objectLet = {
//     "key": "value",
// }
// console.log(objectLet.key);
// const listObj = [1, 2, 3, 4];
// console.log(listObj);

// const emailExp = /\d+/
// const numb = "1234f"
// console.log(emailExp.test(numb));

// const premStr = "pre";
// const objStr = new String("text some");
// console.log(typeof premStr);
// console.log(typeof objStr);
