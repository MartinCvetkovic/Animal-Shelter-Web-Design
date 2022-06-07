$(document).ready(function() {
    let id = localStorage.getItem('aId');
    let tip = id.split("_")[0];
    id = id.split("_")[1];

    //name, breed, gender, description, kg, months, thumbnail, videos, pictures
    let animal = JSON.parse(localStorage.getItem(tip))[id];

    $("#animal").append("<p>Ime: " + animal.name + "</p>");
    $("#animal").append("<img src=" + animal.thumbnail + ">");
});