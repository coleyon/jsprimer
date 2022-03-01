const urlParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let qtitle = urlParams.title; // "some_value"
const title = document.getElementById("title");
const h1title = document.getElementById("showtitle");
const anchorUrl = document.getElementById("anchorurl");

title.textContent = qtitle;
h1title.textContent = qtitle;
anchorUrl.href = `https://${qtitle}/${qtitle}`;