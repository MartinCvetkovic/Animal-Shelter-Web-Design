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

        $("#korisnik").append("<h4 class='text-center'>User: " + loggedIn + "</h4>");

        let row = "<table class='table text-center' id='comment'><tr><th>Autor</th><th>Comment text</th></tr></table>";
        $("#komentari").append(row);

        let oglasi = JSON.parse(localStorage.getItem('oglasi'));
        oglasi.forEach((oglas, index) => {
            if(oglas.autor == loggedIn){
                let row = "<div class='p-5'><table class='table text-center' id='tbl" + index + "'><tr><td>Pet name: </td><td id='ime" + index +"'>"
                    + oglas.ime + "</td></tr><tr><td>Description: </td><td id='opis" + index + "'>"
                    + oglas.opis + "</td></tr><tr><td>Contact number: </td><td id='tel" + index + "'>" + oglas.tel
                    + "</td></tr><tr><td colspan='2'><button class='delete-button btn btn-outline-secondary btn-light' id='btn" + index
                    + "'>Delete announcement</button></td></tr></table></div>";

                $("#oglasi").append(row);
            }

            oglas.komentari.forEach(komentar=>{
                if(komentar.autor == loggedIn){
                    $("#comment").append('<tr><td>' + komentar.autor + "</td><td>" + komentar.tekst + '</td></tr>');
                }
            });

        });

        $(".delete-button").click(deleteOglas);

    }
    
    initialize();

});