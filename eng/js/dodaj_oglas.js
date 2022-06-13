$(document).ready(function(){

    $("#objavi").click(function(){
        let ime = $("#ime").val();
        let opis = $("#opis").val();
        let tel = $("#tel").val();
        if(ime == "" || opis == "" || tel == ""){
            return;
        }

        let oglas = {
            ime: ime,
            opis: opis,
            tel: tel,
            komentari: [],
            autor: 'Pera'
        };

        let oglasi = JSON.parse(localStorage.getItem("oglasi"));
        if(oglasi == null){
            oglasi = [];
        }

        oglasi.push(oglas);

        localStorage.setItem("oglasi", JSON.stringify(oglasi));
    });

});