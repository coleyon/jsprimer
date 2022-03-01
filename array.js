

// const numStr = ['a', 'b', 'c'];
// let initialStr = '';
// const concattedStr = numStr.reduce(
//     (concatted, currentValue, index, array) => {
//         return concatted + currentValue;
//     }, initialStr
// );
// console.log(concattedStr);

// const numArr = [1, 2, 3, 4, 5, 6];
// let initialNum = 0;
// const totalValue = numArr.reduce(
//     (total, currentValue, index, array) => {
//         return total + currentValue;
//     }, initialNum
// );
// console.log(totalValue);

// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter(
//     (currentValue, index, arr) => {
//         return currentValue > 3;
//     }
// )
// console.log(newArr);


// const arr = ['a', 'b', 'c'];
// const newArr = arr.map(
//     (currentValue, index, arr) => {
//         return `${currentValue}.edited`;
//     }
// )
// console.log(newArr);


// const arr = ['a', 'b', 'c'];
// arr.forEach(
//     (currentValue, index, arr) => {
//         console.log(`currentvalue=${currentValue}`, `idx=${index}`, `array=${arr}`);
//     }
// )

// const array = [[["A"], "B"], "C"];
// // 引数なしは 1 を指定した場合と同じ
// console.log(array.flat()); // => [["A"], "B", "C"]
// console.log(array.flat(1)); // => [["A"], "B", "C"]
// console.log(array.flat(2)); // => ["A", "B", "C"]
// // すべてをフラット化するには Infinity を渡す
// console.log(array.flat(Infinity)); // => ["A", "B", "C"]


// const arr = [1, 2, 3];
// const additions = [4, 5, 6];
// arr.concat(additions);
// console.log(arr);
// const concattedArr = arr.concat(additions);
// console.log(concattedArr);
// console.log(`plus op is not useful: ${arr + additions}`)
// const spreading = [9, 8, 7, ...additions];
// console.log(`spreading: ${spreading}`)

// const arr = [1, 2, 3];
// arr.push("d");
// console.log(arr);
// arr.pop();
// console.log(arr);

// const array = ["Java", "JavaScript", "Ruby"];
// if (array.includes("Java")) {
//     console.log("include");
// }
// const obj = { key: "2" };
// const objects = [{ key: "1" }, obj, { key: "3" }];
// if (objects.includes({ key: "2" })) {
//     console.log("not entr");
// } else {
//     console.log("eq is not include.");
// }
// const isIncludedObj = objects.some(
//     tmp => {
//         return obj.key === "2";
//     }
// )
// console.log(`same obj founded: ${isIncludedObj}`);


// const array = ["A", "B", "C", "D", "E"];
// // インデックス1から4の範囲を取り出す
// console.log(array.slice(1, 4)); // => ["B", "C", "D"]
// // 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
// console.log(array.slice(1)); // => ["B", "C", "D", "E"]
// // マイナスを指定すると後ろからの数えた位置となる
// console.log(array.slice(-1)); // => ["E"]
// // 第一引数と第二引数が同じ場合は、空の配列を返す
// console.log(array.slice(1, 1)); // => []
// // 第一引数 > 第二引数の場合、常に空配列を返す
// console.log(array.slice(4, 1)); // => []


// const obj = { key: "2" };
// const objects = [{ key: "1" }, obj, { key: "3" }];
// const two = objects.find(
//     tmp => {
//         return tmp.key === "2";
//     }
// )
// const notFound = objects.find(
//     tmp => {
//         return tmp.key === "9";
//     }
// )
// console.log(`you can find value using the find method: ${two.key}`);
// console.log(`is notfound undef? ${notFound == undefined}`);



// const numbers = [1, 2, 3];
// console.log(numbers.indexOf(2));
// const matrix = [
//     [4, 5],
//     [7, 8],
// ]
// console.log(matrix.indexOf(1));
// const obj = { key: "2" };
// const objects = [{ key: "1" }, obj, { key: "3" }];
// console.log(`object is not eq ${ obj === { key: "2" }}, but same: ${ obj == obj}`);
// console.log(`eq is seachable ? ${ objects.indexOf({ key: "2" }) }`);
// console.log(`same is searchable ? ${ objects.indexOf(obj) }`);
// const indexOfTwo = objects.findIndex(
//     obj => {
//         return obj.key === "2";
//     }
// )
// console.log(`you can use indexOf method: ${ indexOfTwo }`);

// typedArray = new Int16Array(8);
// console.log(typedArray.length);
// console.log(Array.isArray(typedArray));


// const emtyArray = [];
// const number = [1, 2, 3];
// const matrix = [
//     [4, 5],
//     [7, 8],
// ]

// console.log(`${ matrix[0][1] } / ${ matrix[1][0] }`);
