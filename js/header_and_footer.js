$(document).ready(function() {


    let header = $('\
        <nav class="navbar navbar-expand-lg nav-fill mb-3 mt-3">\
            <div class="container-fluid">\
                <a class="navbar-brand" href="o_nama.html">\
                    <img src="./media/logo.png" width="100">\
                </a>\
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">\
                    <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse" id="navbarItems">\
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">\
                        <li class="nav-item">\
                            <a class="nav-link" href="index.html">Pocetna</a>\
                        </li>\
                        <li class="nav-item dropdown">\
                            <div class="btn-group dropdown-hover-trigger">\
                                <a href="zivotinje.html" class="dropdown-toggle nav-link" id="dropdownMenuButton1" aria-expanded="false">\
                                    Zivotinje\
                                </a>\
                                <ul class="dropdown-menu dropdown-hover-target" aria-labelledby="navbarDropdown">\
                                    <li><a class="dropdown-item text-center" href="psi.html">Psi</a></li>\
                                    <li><a class="dropdown-item text-center" href="macke.html">Macke</a></li>\
                                    <li><a class="dropdown-item text-center" href="ptice.html">Ptice</a></li>\
                                </ul>\
                            </div>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="izgubljeni_ljubimci.html">Izgubljeni Ljubimci</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="dodaj_oglas.html">Dodaj Oglas</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="moj_nalog.html">Moj Nalog</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="o_nama.html">O Nama</a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
    ');

    let footer = $('\
        <div class="col-12 text-center mt-5">\
            Copyright 2022, Мартин Цветковић, Петар Тирнанић, Одсек за софтверско инжењерство Електротехничког факултета Универзитета у Београду\
        </div>\
    ');

    $("body>div.container").prepend(header);
    $("body>div.container").append(footer);

    $(".dropdown-hover-trigger").hover(function() {
        //$(this).addClass("show");
        $(".dropdown-hover-target").addClass("show").attr("data-bs-popper", "none");
    }, function() {
        //$(this).removeClass("show");
        $(".dropdown-hover-target").removeClass("show").removeAttr("data-bs-popper");
    });

    let deg = localStorage.getItem('deg')?parseInt(localStorage.getItem('deg')):0;
    let speed = 1;
    let sign = 1;
    setInterval(function() {
        deg = (deg+speed*sign)%360;
        $(".navbar").css("background-image", "repeating-conic-gradient(from " + deg + "deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%");
    }, 10);
    setInterval(function() {
        speed = Math.random() * 12 - 10;
        if (speed < 0.5) speed = 0.5;
    }, 200);
    setInterval(function() {
        if (Math.random() < 0.5) sign = -sign;
    }, 2000);

    $(window).on("unload", function() {
        localStorage.setItem('deg', deg);
    });
});