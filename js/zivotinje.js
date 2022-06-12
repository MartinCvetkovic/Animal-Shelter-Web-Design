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
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
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
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '2.1',
                    months: '57',
                    thumbnail: 'media/dog_civava.jpg',
                    videos: [],
                    pictures: []
                },
                {
                    id: '2',
                    name: 'Dusàn',
                    breed: 'Pudla',
                    gender: 'M',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '8.9',
                    months: '101',
                    thumbnail: 'media/dog_pudla.webp',
                    videos: [],
                    pictures: []
                }
            ]))
                break;
            case 'macke': localStorage.setItem(tip, JSON.stringify([
                {
                    id: '0',
                    name: 'Doki',
                    breed: 'Himalajska Macka',
                    gender: 'F',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '4.2',
                    months: '69',
                    thumbnail: 'media/macka_himalajska.jpg',
                    videos: [],
                    pictures: []
                },
                {
                    id: '1',
                    name: 'Kleopatra',
                    breed: 'Persijska Macka',
                    gender: 'F',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '4.4',
                    months: '47',
                    thumbnail: 'media/macka_persijska.jpg',
                    videos: [],
                    pictures: []
                },
                {
                    id: '2',
                    name: 'Hiro',
                    breed: 'Egejska Macka',
                    gender: 'M',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content. kawaiiii <3',
                    kg: '0.9',
                    months: '4',
                    thumbnail: 'media/macka_aegean.jpg',
                    videos: [],
                    pictures: []
                }
            ]))
                break;
            case 'ptice': localStorage.setItem(tip, JSON.stringify([
                {
                    id: '0',
                    name: 'Pepe',
                    breed: 'Papagaj',
                    gender: 'M',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '0.56',
                    months: '331',
                    thumbnail: 'media/ptica_papagaj.jpg',
                    videos: [],
                    pictures: []
                },
                {
                    id: '1',
                    name: 'Marija',
                    breed: 'Stiglan',
                    gender: 'F',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '0.03',
                    months: '33',
                    thumbnail: 'media/ptica_stiglan.jpg',
                    videos: [],
                    pictures: []
                },
                {
                    id: '2',
                    name: 'Herakle',
                    breed: 'Golub',
                    gender: 'M',
                    description: 'Kratak Opis, example text to build on the card title and make up the bulk of the card\'s content.',
                    kg: '0.47',
                    months: '55',
                    thumbnail: 'media/ptica_golub.jpg',
                    videos: [],
                    pictures: []
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
                        <img class="card-img-top" src="'+ animal.thumbnail +'" alt="Slika zivotinje">\
                        <div class="card-body pb-0">\
                            <h5 class="card-title">'+ animal.name +'</h5>\
                            <h6 class="card-subtitle mb-2 text-muted">' + animal.breed + '&nbsp<img src="' + (animal.gender == "F"?"media/gender_female.png":"media/gender_male.png") + '" alt="' + (animal.gender == "F"?"zensko":"musko") + '" class="gender ' + (animal.gender == "F"?"female":"male") + '"></h6>\
                            <hr class="divider"><p class="card-text">' + animal.description + '</p>\
                            <div class="attributes">\
                                <span class="weigth">' + animal.kg + ' kg</span><span class="age">' + (animal.months<12? animal.months+" meseci":Math.floor(animal.months/12)+" godina") + '</span>\
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