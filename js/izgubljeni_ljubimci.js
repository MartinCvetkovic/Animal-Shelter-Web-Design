$(document).ready(function(){
    
    function addComment() {
        let autor = "Pera";
        let id = parseInt($(this).attr('id').slice(3, 4));
        let tekst = $("#inp" + id).val();

        let komentar = {
            autor: autor,
            tekst: tekst
        };

        let oglasi = JSON.parse(localStorage.getItem("oglasi"));
        oglasi[id].komentari.push(komentar);

        localStorage.setItem("oglasi", JSON.stringify(oglasi));

        $("#zivotinje").empty();
        inicijalizuj();
    }

    function downloadPdf(){
        let id = parseInt($(this).attr('id').slice(3, 4));

        let win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head></head><body>');

        let obj = $($("#tbl" + id).html());
        obj.children().last().remove();

        win.document.write(obj.html());
        win.document.write('</body></html>');

        win.document.close();

        win.print();
    }


    function inicijalizuj(){
        let oglasi = JSON.parse(localStorage.getItem("oglasi"));
        if(oglasi == null){
            $("#zivotinje").append("Nema oglasa za izgubljene ljubimce");
            return;
        }

        oglasi.forEach((oglas, index) => {
            let row = "<table class='table text-center' id='tbl" + index + "'><tr><td>Ime ljubimca: </td><td>" + oglas.ime + "</td></tr><tr><td>Opis: </td><td>"
                + oglas.opis + "</td></tr><tr><td>Kontakt telefon: </td><td>" + oglas.tel + "</td></tr>"
                + "<tr><td><input class='form-control' id='inp" + index + "' type='text' placeholder='Tekst komentara'></td>"
                +"<td><button class='comment-button btn btn-light btn-outline-secondary' id='btn" + index
                + "'>Ostavi komentar</button></td><td><button class='pdf-button btn btn-light btn-outline-secondary' id='pdf" + index
                + "'>Preuzmi oglas</button></td></tr></table><h6 class='text-center'>Komentari</h6>";

            $("#zivotinje").append(row);

            oglas.komentari.forEach(komentar=>{
                let row = "<table class='table text-left'><tr><td>" + komentar.autor + "</td><td>" + komentar.tekst + "</td></tr></table>";

                $("#zivotinje").append(row);
            });
        });

        $(".comment-button").click(addComment);
        $(".pdf-button").click(downloadPdf);
    }

    inicijalizuj();
});