$(document).ready(function(){

    function deleteOglas(){
        let id = $(this).attr('id').slice(3, 4)

        let ime = $("#ime" + id).text();
        let opis = $("#opis" + id).text();
        let tel = $("#tel" + id).text();
        let i = null;

        let oglasi = JSON.parse(localStorage.getItem('oglasi'));
        oglasi.forEach((oglas, index) => {
            if(oglas.ime == ime && oglas.opis == opis && oglas.tel == tel){
                i = index;
                return;
            }
        });

        if(i != null){
            oglasi.splice(i, 1);
        }

        localStorage.setItem('oglasi', JSON.stringify(oglasi));

        $("#tbl" + id).remove();
    }

    function initialize(){
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
        oglasi.forEach((oglas, index) => {
            if(oglas.autor == loggedIn){
                let row = "<table class='table text-center' id='tbl" + index + "'><tr><td>Ime ljubimca: </td><td id='ime" + index +"'>"
                    + oglas.ime + "</td></tr><tr><td>Opis: </td><td id='opis" + index + "'>"
                    + oglas.opis + "</td></tr><tr><td>Kontakt telefon: </td><td id='tel" + index + "'>" + oglas.tel
                    + "</td><td><button class='delete-button btn btn-outline-secondary btn-light' id='btn" + index + "'>Obriši oglas</button></td></tr>";

                $("#oglasi").append(row);
            }

            oglas.komentari.forEach(komentar=>{
                let row = "<table class='table text-left'><tr><td>" + komentar.autor + "</td><td>" + komentar.tekst + "</td></tr></table>";

                $("#komentari").append(row);
            });

        });

        $(".delete-button").click(deleteOglas);

    }
    
    initialize();

});