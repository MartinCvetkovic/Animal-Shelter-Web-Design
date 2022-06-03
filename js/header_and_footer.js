$(document).ready(function() {


    let header = $('\
        <nav class="navbar navbar-expand-lg nav-fill mb-3 mt-3">\
            <div class="container-fluid">\
                <a class="navbar-brand" href="#">\
                    <img src="./media/logo.png" width="100">\
                </a>\
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">\
                    <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse" id="navbarItems">\
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">\
                        <li class="nav-item">\
                            <a class="nav-link" href="#">Pocetna</a>\
                        </li>\
                        <li class="nav-item dropdown">\
                            <div class="btn-group">\
                                <a class="nav-link" href="#">Zivotinje</a>\
                                <a class="nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">\
                                    <span class="visually-hidden">Toggle Dropdown</span>\
                                </a>\
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\
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


});