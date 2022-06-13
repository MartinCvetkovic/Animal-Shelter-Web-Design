$(document).ready(function() {
    let id = localStorage.getItem('aId');
    let tip = id.split("_")[0];
    id = id.split("_")[1];

    //name, breed, gender, description, kg, months, thumbnail, videos, pictures
    let animal = JSON.parse(localStorage.getItem(tip))[id];

    $("#name").append(animal.name);
    $("#breed").append(animal.breed).append("&nbsp<img src=../" + (animal.gender=="M"?"media/gender_male.png":"media/gender_female.png") + " class="+ (animal.gender=="M"?"male":"female") +">")
    $("#picture").append("<img src=../" + animal.thumbnail + " class='thumbnail'>");

    $("#description").append(animal.description);
    $("#weigth").append("<b>Weight:</b> " + animal.kg + " kg")
    $("#age").append("<b>Age: </b>" + Math.floor(animal.months/12) + " years, " + animal.months%12 + " months");

    let im = $("#images")
    let i = 0;
    let row = $("<div class='row'></div>");
    let max = animal.pictures.length;
    animal.pictures.forEach((element, index) => {
        row.append($("<div class='col-xl-3 col-md-6 col-xs-12 mb-3'><img src='../" + element + "' class='pic' data-bs-toggle='modal' data-bs-target='#p" + (index) + "'>\
        <div class='modal fade' id='p" + (index) + "' tabindex='-1' aria-hidden='true'>\
        <div class='modal-dialog modal-lg modal-dialog-centered'>\
            <div class='modal-content'>\
            \
                <div class='modal-body justify-content-center d-flex'>\
                    <img src='../" + element + "' class='img-fluid'>\
                </div>\
            \
                <div class='modal-footer justify-content-between align-items-center '>\
                    <button class='btn btn-primary catch-left' data-bs-target='#p" + ((index-1 < 0)?max-1:index-1) + "' data-bs-toggle='modal' data-bs-dismiss='modal'>Previous</button>\
                    <h4>" + (index+1) + "/" + max + "</h4>\
                    <button class='btn btn-primary catch-right' data-bs-target='#p" + ((index+1 >= max)?0:index+1) + "' data-bs-toggle='modal' data-bs-dismiss='modal'>Next</button>\
                </div>\
            \
            </div>\
        </div>\
        </div>"));
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

    $(document).keydown(function(event) {
        if (event.which == 37) {
            $(".modal:visible .catch-left").click();
        }
        else if (event.which == 39) {
            $(".modal:visible .catch-right").click();
        }
    });

    switch(tip) {
        case 'psi': $("#breads").append($('<li class="breadcrumb-item"><a href="psi.html">Dogs</a></li>')); break;
        case 'macke': $("#breads").append($('<li class="breadcrumb-item"><a href="macke.html">Cats</a></li>')); break;
        case 'ptice': $("#breads").append($('<li class="breadcrumb-item"><a href="ptice.html">Birds</a></li>')); break;
    }

    $("#breads").append($('<li class="breadcrumb-item active" aria-current="page">' + animal.name + '</li>'));
});