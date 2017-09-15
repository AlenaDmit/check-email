const   btn = document.querySelector("#button"),
        res = document.querySelector("#response"),
        src = document.querySelector("#source"),
        author = document.querySelector("#author");

btn.addEventListener("click", function() {
    author.innerHTML = "Author: Alena Dmitrievskaia";
    src.innerHTML = "Address for check for: ";

    let url = window.location.href.replace(/^.*?\?/, '').replace(/#.*$/, '').split('&');

    (/^([a-z]{3,})@(gmail\.com)$/.test(url)) ? (res.innerHTML = "yes") : (res.innerHTML = "no");

})
