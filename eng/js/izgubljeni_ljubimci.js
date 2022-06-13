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
        let elem = $("tbody#pdfGroup_" + id)[0];
        
        html2canvas(elem, {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Oglas.pdf");
            }
        });
    }


    function inicijalizuj(){
        let oglasi = JSON.parse(localStorage.getItem("oglasi"));
        if(oglasi == null){
            $("#zivotinje").append("Nema oglasa za izgubljene ljubimce");
            return;
        }

        oglasi.forEach((oglas, index) => {
            let row = "<div class='p-5'><h5 class='text-center'>Oglas</h5><table class='table text-center' id='tbl" + index + "'><tbody id='pdfGroup_" + index + "'><tr><td>Ime ljubimca: </td><td>" + oglas.ime + "</td></tr><tr><td>Opis: </td><td>"
                + oglas.opis + "</td></tr><tr><td>Kontakt telefon: </td><td>" + oglas.tel + "</td></tr></tbody>"
                + "<tr class='last-row'><td><input class='form-control' id='inp" + index + "' type='text' placeholder='Tekst komentara'></td>"
                +"<td><button class='comment-button btn btn-light btn-outline-secondary' id='btn" + index
                + "'>Ostavi komentar</button><button class='pdf-button btn btn-light btn-outline-secondary ms-5' id='pdf" + index
                + "'>Preuzmi oglas</button></td></tr></table><h6 class='text-center'>Komentari</h6>"
                + "<table class='table text-center' id='comment" + index + "'><tr><th>Autor</th><th>Tekst komentara</th></tr></table></div><br><br>";

            $("#zivotinje").append(row);

            oglas.komentari.forEach(komentar=>{
                let row = "<tr><td>" + komentar.autor + "</td><td>" + komentar.tekst + "</td></tr>";

                $("#comment" + index).append(row);
            });
        });

        $(".comment-button").click(addComment);
        $(".pdf-button").click(downloadPdf);
    }

    inicijalizuj();
});