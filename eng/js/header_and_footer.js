$(document).ready(function() {


    let header = $('\
        <nav class="navbar navbar-expand-lg nav-fill mb-3 mt-3">\
            <div class="container-fluid">\
                <a class="navbar-brand" href="o_nama.html">\
                    <img src="../media/logo.jpg" width="100">\
                </a>\
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">\
                    <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse" id="navbarItems">\
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">\
                        <li class="nav-item" id="hi1">\
                            <a class="nav-link" href="index.html">Home</a>\
                        </li>\
                        <li class="nav-item dropdown" id="hi2">\
                            <div class="btn-group dropdown-hover-trigger">\
                                <a href="zivotinje.html" class="dropdown-toggle nav-link" id="dropdownMenuButton1" aria-expanded="false">\
                                    Animals\
                                </a>\
                                <ul class="dropdown-menu dropdown-hover-target" aria-labelledby="navbarDropdown">\
                                    <li><a class="dropdown-item text-center" href="psi.html">Dogs</a></li>\
                                    <li><a class="dropdown-item text-center" href="macke.html">Cats</a></li>\
                                    <li><a class="dropdown-item text-center" href="ptice.html">Birds</a></li>\
                                </ul>\
                            </div>\
                        </li>\
                        <li class="nav-item" id="hi3">\
                            <a class="nav-link" href="izgubljeni_ljubimci.html">Lost Pets</a>\
                        </li>\
                        <li class="nav-item" id="hi4">\
                            <a class="nav-link" href="dodaj_oglas.html">Add Announcement</a>\
                        </li>\
                        <li class="nav-item" id="hi5">\
                            <a class="nav-link" href="moj_nalog.html">My Account</a>\
                        </li>\
                        <li class="nav-item" id="hi6">\
                            <a class="nav-link" href="o_nama.html">About Us</a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
    ');

    let footer = $('\
        <div class="col-12 text-center mt-3 rounded" id="banner">\
            Contact number: +000000000 <a href="https://facebook.com"><img src="../media/fb.png" class="bannerimg ms-5 my-2"></a>\
            <a href="https://instagram.com"><img src="../media/instagram.png" class="bannerimg ms-5 my-2"></a>\
            <a href="https://youtube.com"><img src="../media/youtube.png" class="bannerimg ms-5 my-2"></a>\
        </div>\
        <div class="col-12 text-center mb-2 rounded" id="footer">\
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

    $("#"+$("#_current").val()).addClass("current-item");
});