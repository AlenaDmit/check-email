const   btn = document.querySelector("#button"),
        res = document.querySelector("#response"),
        src = document.querySelector("#source"),
        author = document.querySelector("#author");

btn.addEventListener("click", function() {
    author.innerHTML = "Author: Alena Dmitrievskaia";
    src.innerHTML = "Address for check for: ";

    let url = window.location.href.replace(/^.*?\?/, '').replace(/#.*$/, '').split('&');

    (/^((test=)[a-z]{3,})@(yandex\.ru)$/.test(url[0])) ? (res.innerHTML = "yes") : (res.innerHTML = "no");

})
