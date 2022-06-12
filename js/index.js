$(document).ready(function(){

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
    }


    initAnimals();

});