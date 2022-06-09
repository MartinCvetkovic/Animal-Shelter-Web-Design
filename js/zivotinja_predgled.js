$(document).ready(function() {
    let id = localStorage.getItem('aId');
    let tip = id.split("_")[0];
    id = id.split("_")[1];

    //name, breed, gender, description, kg, months, thumbnail, videos, pictures
    let animal = JSON.parse(localStorage.getItem(tip))[id];

    $("#name").append(animal.name);
    $("#breed").append(animal.breed).append("&nbsp<img src=" + (animal.gender=="M"?"media/gender_male.png":"media/gender_female.png") + " class="+ (animal.gender=="M"?"male":"female") +">")
    $("#picture").append("<img src=" + animal.thumbnail + " class='thumbnail'>");

    $("#description").append(animal.description);
    $("#weigth").append("Tezina: " + animal.kg + " kg")
    $("#age").append("Starost: " + Math.floor(animal.months/12) + " godina, " + animal.months%12 + " meseci");

    let im = $("#images")
    let i = 0;
    let row = $("<div class='row'></div>");
    animal.pictures.forEach(element => {
        
        row.append($("<div class='col-xl-3 col-md-6 col-xs-12 mb-3'><img src='" + element + "' class='pic'></div>"));
        i = (i+1)%4;
        if (i == 0) {
            im.append(row);
            row = $("<div class='row'></div>");
        }
    });

    if (i != 0) {
        while (i != 0) {
            row.append("<div class='col'></div>")
            i = (i+1)%4;
        }
        im.append(row);
    }

    // ------------------

    let vid = $("#videos")
    let j = 0;
    row = $("<div class='row'></div>");
    animal.videos.forEach(element => {
        
        row.append($("<div class='col-xl-3 col-md-6 col-xs-12 mb-3'><iframe width='100%' height='100%' src=" + element + " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"));
        j = (j+1)%4;
        if (j == 0) {
            vid.append(row);
            row = $("<div class='row'></div>");
        }
    });

    if (j != 0) {
        while (j != 0) {
            row.append("<div class='col'></div>")
            j = (j+1)%4;
        }
        vid.append(row);
    }
});