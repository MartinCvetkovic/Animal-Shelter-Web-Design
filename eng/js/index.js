$(document).ready(function(){

    let sviOglasi = [];

    function initAnimals() {
        if(localStorage.getItem('oglasi') == null){
            let oglasi = [
                {
                    autor : 'Žika',
                    ime : 'Bruno',
                    komentari : [
                        {
                            autor: 'Nebojša',
                            tekst: 'Video sam zlatnog retrivera blizu Kalemegdana'
                        },
                        {
                            autor: 'Miki',
                            tekst: 'Pronašao sam ga, kontaktirajte me na broj +1234567891'
                        }
                    ],
                    opis : 'Izgubljen zlatni retriver Bruno na Kalemegdanu, pronalazaču sledi nagrada',
                    tel : '+381123456789'
                },
                {
                    autor : 'Miki',
                    ime : 'Lora',
                    komentari : [],
                    opis : 'Izgubljen zapadno škotski terijer kod pete škole u Vranju, hvala svima koji se jave',
                    tel : '+756735734'
                }
            ];

            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }

        sviOglasi = JSON.parse(localStorage.getItem('oglasi'));
    }

    initAnimals();
    sviOglasi.reverse();
    let cnt = 0;
    sviOglasi.forEach((oglas, index) => {
        if(cnt >= 3) return;
        let row = "<div class='p-3 col-sm-12 col-md-6 col-lg-3'><h5 class='text-center'>Oglas</h5><table class='table text-center' id='tbl" + index + "'><tbody id='pdfGroup_" + index + "'><tr><td>Ime ljubimca: </td><td>" + oglas.ime + "</td></tr><tr><td>Opis: </td><td>"
                + oglas.opis + "</td></tr><tr><td>Kontakt telefon: </td><td>" + oglas.tel + "</td></tr></tbody></table></div>";


        $("#oglasi").append(row);
        cnt++;
    });

});