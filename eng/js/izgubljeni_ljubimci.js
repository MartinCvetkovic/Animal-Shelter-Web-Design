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
                pdfMake.createPdf(docDefinition).download("Announcement.pdf");
            }
        });
    }


    function inicijalizuj(){
        let oglasi = JSON.parse(localStorage.getItem("oglasi"));
        if(oglasi == null){
            $("#zivotinje").append("No announcements for lost pets");
            return;
        }

        oglasi.forEach((oglas, index) => {
            let row = "<div class='p-5'><h5 class='text-center'>Announcement</h5><table class='table text-center' id='tbl"
                + index + "'><tbody id='pdfGroup_" + index + "'><tr><td>Pet name: </td><td>" + oglas.ime + "</td></tr><tr><td>Description: </td><td>"
                + oglas.opis + "</td></tr><tr><td>Contact number: </td><td>" + oglas.tel + "</td></tr></tbody>"
                + "<tr class='last-row'><td><input class='form-control' id='inp" + index + "' type='text' placeholder='Comment text'></td>"
                +"<td><button class='comment-button btn btn-light btn-outline-secondary' id='btn" + index
                + "'>Leave a comment</button><button class='pdf-button btn btn-light btn-outline-secondary ms-5' id='pdf" + index
                + "'>Download announcement</button></td></tr></table><h6 class='text-center'>Comments</h6>"
                + "<table class='table text-center' id='comment" + index + "'><tr><th>Author</th><th>Comment text</th></tr></table></div><br><br>";

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