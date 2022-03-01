"use strict";



// const successPromise = new Promise(
//     (resolve) => {
//         resolve();
//     }
// );


function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// /success/data のリソースは存在するので成功しonFulfilledが呼ばれる
dummyFetch("/success/data").then(function onFulfilled(response) {
    console.log(response); // => { body: "Response body of /success/data" }
}, function onRejected(error) {
    // この行は実行されません
});
// /failure/data のリソースは存在しないのでonRejectedが呼ばれる
dummyFetch("/failure/data").then(function onFulfilled(response) {
    // この行は実行されません
}, function onRejected(error) {
    console.log(error); // Error: "NOT FOUND"
});

// // `Promise`インスタンスを作成
// const promise = new Promise((resolve, reject) => {
//     // 非同期の処理が成功したときはresolve()を呼ぶ
//     resolve();
//     // 非同期の処理が失敗したときにはreject()を呼ぶ
//     reject();
// });
// const onFulfilled = () => {
//     console.log("resolveされたときに呼ばれる");
// };
// const onRejected = () => {
//     console.log("rejectされたときに呼ばれる");
// };
// // `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// promise.then(onFulfilled, onRejected);



// // [Error First Callback]
// // 非同期処理内で発生した例外を、呼び出し側で受け取ることができない。
// // 呼び出し側でエラーハンドリングを可能とするために、ErrorFirstCallbackと呼ばれる呼び出し手法が利用される
// // これはコーディング規約的な取り決めであって、言語仕様ではない。
// // ES2015からは代わりに言語仕様としてPromiseが利用できる
// function dummyFetch(path, callback) {
//     setTimeout(() => {
//         if (path.startsWith("/success")) {
//             callback(null, { body: `Response body of ${path}` });
//         } else {
//             callback(new Error("Error!"));
//         }
//     }, 1000 * Math.random());
// }
// dummyFetch(
//     "/success/data", (error, response) => {
//         if (error) {
//             console.log(`SE ${error.message}`);
//         } else {
//             console.log(`SS ${response.body}`);
//         }
//     }
// );
// dummyFetch(
//     "/failure/data", (error, response) => {
//         if (error) {
//             console.log(`EE ${error.message}`);
//         } else {
//             console.log(`ES ${response.body}`);
//         }
//     }
// );


// function blockTime(timeout) {
//     const startTime = Date.now();
//     while (true) {
//         const diffTime = Date.now() - startTime;
//         if (diffTime >= timeout) {
//             return;
//         }
//     }
// }
// console.log("1");
// setTimeout(() => {
//     console.log("3");
//     blockTime(2000);
//     console.log("4")
// }, 10);
// console.log("2");

