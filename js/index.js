$(document).ready(function(){

    function initAnimals() {
        if(localStorage.getItem('oglasi') == null){
            let oglasi = [
                {
                    autor : 'Zika',
                    ime : 'Bruno',
                    komentari : [
                        {
                            autor: 'Nebojsa',
                            tekst: 'Video sam zlatnog retrivera blizu Kalemegdana'
                        },
                        {
                            autor: 'Miki',
                            tekst: 'Pronasao sam ga, kontaktirajte me na broj +1234567891'
                        }
                    ],
                    opis : 'Izgubljen zlatni retriver Bruno na Kalemegdanu, pronalazacu sledi nagrada',
                    tel : '+381123456789'
                },
                {
                    autor : 'Miki',
                    ime : 'Lora',
                    komentari : [],
                    opis : 'Izgubljen zapadno skotski terijer kod pete skole u Vranju, hvala svima koji se jave',
                    tel : '+756735734'
                }
            ];

            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }
    }


    initAnimals();

});