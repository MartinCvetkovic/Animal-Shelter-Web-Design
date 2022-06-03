$(document).ready(function(){
    let loggedIn = '';
    if(localStorage.getItem('loggedIn') == null){
        loggedIn = 'Pera';
        localStorage.setItem('loggedIn', loggedIn);
    }
    else{
        loggedIn = localStorage.getItem('loggedIn')
    }

    $("#korisnik").append("<h4>Korisnik: " + loggedIn + "</h4>");

    let oglasi = JSON.parse(localStorage.getItem('oglasi'));
    oglasi.forEach(oglas => {
        if(oglas.autor == loggedIn){
            let row = "<table class='table text-center'><tr><td>Ime ljubimca: </td><td>" + oglas.ime + "</td></tr><tr><td>Opis: </td><td>"
                + oglas.opis + "</td></tr><tr><td>Kontakt telefon: </td><td>" + oglas.tel + "</td></tr>";

            $("#oglasi").append(row);
        }

        oglas.komentari.forEach(komentar=>{
            let row = "<table class='table text-left'><tr><td>" + komentar.autor + "</td><td>" + komentar.tekst + "</td></tr></table>";

            $("#komentari").append(row);
        });

    });

});