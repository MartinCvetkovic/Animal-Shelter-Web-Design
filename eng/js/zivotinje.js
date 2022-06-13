$(document).ready(function() {
    let tip = $("input[name = '_tip']").val();

    if (localStorage.getItem(tip) == null) {
        switch(tip) {
            case 'psi': localStorage.setItem(tip, JSON.stringify([
                {
                    id: '0',
                    name: 'Donna',
                    breed: 'Buldog',
                    gender: 'F',
                    description: 'Puniji pas svetlosmedjeg krzna i širokog osmeha. Sjajna sa decom i drugim psima.',
                    kg: '17',
                    months: '37',
                    thumbnail: 'media/dog_buldog.jpeg',
                    videos: ['https://www.youtube.com/embed/43b1JeJivCA'],
                    pictures: ['media/dog_buldog.jpeg', 'media/dog_buldog_2.webp', 'media/dog_buldog_3.jpg']
                },
                {
                    id: '1',
                    name: 'Carli',
                    breed: 'Civava',
                    gender: 'M',
                    description: 'Druželjubiva čivava bele boje sa crnim pegama, sitne gradje i mirnog temperamenta.',
                    kg: '2.1',
                    months: '57',
                    thumbnail: 'media/dog_civava.jpg',
                    videos: ['https://www.youtube.com/embed/cXyumiq3ODs', 'https://www.youtube.com/embed/QKRD2f2_wSQ'],
                    pictures: ['media/dog_civava.jpg', 'media/dog_civava_2.jpg', 'media/dog_civava_3.jpg']
                },
                {
                    id: '2',
                    name: 'Dusàn',
                    breed: 'Pudla',
                    gender: 'M',
                    description: 'Stariji pas veoma guste, zlatne dlake. Voli ležanje na suncu i druge opuštene aktivnosti.',
                    kg: '8.9',
                    months: '101',
                    thumbnail: 'media/dog_pudla.webp',
                    videos: ['https://www.youtube.com/embed/Z-J1mbVt8KA', 'https://www.youtube.com/embed/uYbpE3b7oTY'],
                    pictures: ['media/dog_pudla.webp', 'media/dog_pudla_2.jpeg']
                }
            ]))
                break;
            case 'macke': localStorage.setItem(tip, JSON.stringify([
                {
                    id: '0',
                    name: 'Doki',
                    breed: 'Himalajska Macka',
                    gender: 'F',
                    description: 'Mačka svetle dlake sa talasima smedje. Provodi većinu vremena napolju.',
                    kg: '4.2',
                    months: '69',
                    thumbnail: 'media/macka_himalajska.jpg',
                    videos: [],
                    pictures: ['media/macka_himalajska.jpg', 'media/macka_himalajska_2.jpg', 'media/macka_himalajska_3.jpg']
                },
                {
                    id: '1',
                    name: 'Kleopatra',
                    breed: 'Persijska Macka',
                    gender: 'F',
                    description: 'Sneg bela mačka zlatnih očiju sa vrlo pufnastom dlakom. Plašljiva, obično se kloni ljudi.',
                    kg: '4.4',
                    months: '47',
                    thumbnail: 'media/macka_persijska.jpg',
                    videos: ['https://www.youtube.com/embed/Nm_DbC9aYBU', 'https://www.youtube.com/embed/tLb9MSJarJ0'],
                    pictures: ['media/macka_persijska.jpg', 'media/macka_persijska_2.webp', 'media/macka_persijska_3.jpg', 'media/macka_persijska_4.jpg', 'media/macka_persijska_5.jpg']
                },
                {
                    id: '2',
                    name: 'Hiro',
                    breed: 'Egejska Macka',
                    gender: 'M',
                    description: 'Mlado svetlo sivo mače sa tigrastim šarama po krznu. Voli da istražuje okolinu.',
                    kg: '0.9',
                    months: '4',
                    thumbnail: 'media/macka_aegean.jpg',
                    videos: ['https://www.youtube.com/embed/oDrskSPv2AQ', 'https://www.youtube.com/embed/6b_vpZpMKcs'],
                    pictures: ['media/macka_aegean.jpg', 'media/macka_aegean_2.jpg', 'media/macka_aegean_3.jpg', 'media/macka_aegean_4.jpg']
                }
            ]))
                break;
            case 'ptice': localStorage.setItem(tip, JSON.stringify([
                {
                    id: '0',
                    name: 'Pepe',
                    breed: 'Papagaj',
                    gender: 'M',
                    description: 'Egzotičan papagaj crveno-žuto-plavog perja sa nijansama zelene. Uvek raspoložan za razgovor.',
                    kg: '0.56',
                    months: '331',
                    thumbnail: 'media/ptica_papagaj.jpg',
                    videos: ['https://www.youtube.com/embed/1i-17VZDMQQ', 'https://www.youtube.com/embed/OW7J_3z1MOI'],
                    pictures: ['media/ptica_papagaj.jpg', 'media/ptica_papagaj_2.jpg', 'media/ptica_papagaj_3.jpg', 'media/ptica_papagaj_4.jpg', 'media/ptica_papagaj_5.webp']
                },
                {
                    id: '1',
                    name: 'Marija',
                    breed: 'Stiglan',
                    gender: 'F',
                    description: 'Sitna, graciozna ptica, poznata zbog svog pevačkog umeca. Čuvajte je dalje od mačaka.',
                    kg: '0.03',
                    months: '33',
                    thumbnail: 'media/ptica_stiglan.jpg',
                    videos: ['https://www.youtube.com/embed/TT1Pahi66Rw', 'https://www.youtube.com/embed/rHaSY7TMK2I'],
                    pictures: ['media/ptica_stiglan.jpg', 'media/ptica_stiglan_2.jpg', 'media/ptica_stiglan_3.jpg']
                },
                {
                    id: '2',
                    name: 'Herakle',
                    breed: 'Golub',
                    gender: 'M',
                    description: 'Običan sivi golub, sa prepoznatljivim zelenim odsjajem oko vrata. Veoma hrabar.',
                    kg: '0.47',
                    months: '55',
                    thumbnail: 'media/ptica_golub.jpg',
                    videos: ['https://www.youtube.com/embed/LgVZw7IWKwY', 'https://www.youtube.com/embed/lM50gbVzxPE', 'https://www.youtube.com/embed/KMFSF2Tdg6E'],
                    pictures: ['media/ptica_golub.jpg', 'media/ptica_golub_2.jpg', 'media/ptica_golub_3.jpg', 'media/ptica_golub_4.jpg']
                }
            ]))
                break;
        }
    }

    let animals = JSON.parse(localStorage.getItem(tip));
    let shown = animals;
    function renderAnimals() {
        $("#animals").empty();

        shown.forEach((animal, i) => {
            let card = '\
            <div class="col-lg-4 col-md-6 col-sm-12 real-center">\
                <a href="zivotinja_pregled.html" class="nondestructive d-block mt-3 mb-3" id="'+ tip + "_" + animal.id +'">\
                    <div class="card">\
                        <img class="card-img-top" src="../'+ animal.thumbnail +'" alt="Slika zivotinje">\
                        <div class="card-body pb-0">\
                            <h5 class="card-title">'+ animal.name +'</h5>\
                            <h6 class="card-subtitle mb-2 text-muted">' + animal.breed + '&nbsp<img src="../' + (animal.gender == "F"?"media/gender_female.png":"media/gender_male.png") + '" alt="' + (animal.gender == "F"?"zensko":"musko") + '" class="gender ' + (animal.gender == "F"?"female":"male") + '"></h6>\
                            <hr class="divider"><p class="card-text">' + animal.description + '</p>\
                            <div class="attributes">\
                                <span class="weigth">' + animal.kg + ' kg</span><span class="age">' + (animal.months<12? animal.months+" months":Math.floor(animal.months/12)+" years") + '</span>\
                            </div>\
                        </div>\
                    </div>\
                </a>\
            </div>\
            ';

            $("#animals").append(card);
        });

        attachLinks();
    }

    function sortByAge(invert = 0) {
        if (!invert)
            shown.sort(function(a,b) {return a.months - b.months});
            else
            shown.sort(function(a,b) {return b.months - a.months});
        renderAnimals();
    }

    function sortByName(invert = 0) {
        if (!invert)
            shown.sort(function(a,b) {return a.name.localeCompare(b.name)});
            else
            shown.sort(function(a,b) {return b.name.localeCompare(a.name)});
        renderAnimals();
    }

    renderAnimals();

    function attachLinks() {
        $("a").click(function() {
            localStorage.setItem('aId', $(this).attr('id'));
        });
    }
    

    let as = 0;
    let aBaseText = $("#ageSort").text();
    $("#ageSort").click(function() {
        sortByAge(as);
        as = 1 - as;
        $(this).text(aBaseText + (as?" ↑":" ↓"));
        ns = 0;
        $("#nameSort").text(nBaseText);
    });

    let ns = 0;
    let nBaseText = $("#nameSort").text();
    $("#nameSort").click(function() {
        sortByName(ns);
        ns = 1 - ns;
        $(this).text(nBaseText + (ns?" ↑":" ↓"));
        as = 0;
        $("#ageSort").text(aBaseText);
    });

    function showSearchName() {
        $("#nameForm").show();
        $("#ageForm").hide();
    }

    function showSearchAge() {
        $("#nameForm").hide();
        $("#ageForm").show();
    }

    function searchName() {
        let text = $("#nameField").val().toLowerCase();
        
        shown = animals;
        shown = shown.filter(e => e.name.toLowerCase().includes(text));
        renderAnimals();
    }

    function searchAge() {
        let num = $("#ageField").val();
        let op = $("#ageOperator").val();

        shown = animals;

        switch(op){
            case 'more': shown = shown.filter(e => parseInt(e.months) > num*12 );
                break;
            case 'exact': shown = shown.filter(e => Math.floor(parseInt(e.months)/12) == num );
                break;
            case 'less': shown = shown.filter(e => parseInt(e.months) < num*12 );
                break;
        }

        renderAnimals();
    }


    $("#name").click(showSearchName);

    $("#age").click(showSearchAge);

    $("#nameSearchButton").click(searchName);
    $("#nameField").keypress(function(event) {if (event.which == 13) searchName()});

    $("#ageSearchButton").click(searchAge);
    $("#ageField").keypress(function(event) {if (event.which == 13) searchAge()});

    showSearchName();
});