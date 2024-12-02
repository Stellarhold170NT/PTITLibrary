$.ajax({
    url: "header.html",
    dataType: "html",
    success: function (data) {
        var body = document.querySelector("body");

        body.insertAdjacentHTML("afterbegin", data);

        var breadcrumb = document.querySelector(".breadcrumb ul");
        var title = getCookie("currentPage");
        console.log("title: " + title);
        var urlPath = window.location.pathname;
        console.log(urlPath);
        if (title !== "" && !urlPath.includes("home")) {
            if (urlPath.includes("major")) {
                breadcrumb.insertAdjacentHTML(
                    "beforeend",
                    ` <li>
                            <a href="#!">` +
                        title +
                        `</a>
                        </li>`
                );
            }

            if (urlPath.includes("borrow")) {
                breadcrumb.insertAdjacentHTML(
                    "beforeend",
                    ` <li>
                            <a href="#!">` +
                        "Mượn sách" +
                        `</a>
                        </li>`
                );
            }
        }

        registerCookie();

        var content = document.querySelector(".header .body");
        content.style.marginTop = "28px";
    },
});

function registerCookie() {
    var aElements = document.querySelectorAll("ul a");

    aElements.forEach((a) => {
        a.addEventListener("click", function (event) {
            // event.preventDefault();
            console.log("CLICKED");
            if (a.classList.contains("home")) {
                setCookie("currentPage", "");
            } else {
                setCookie("currentPage", a.innerHTML);
            }

            console.log("cookie selected: " + getCookie("currentPage"));
        });
    });
}

$.ajax({
    url: "footer.html",
    dataType: "html",
    success: function (data) {
        var body = document.querySelector("body");
        body.insertAdjacentHTML("beforeend", data);
    },
});
