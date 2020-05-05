$(document).ready(function () {

    //localStorage
    if (localStorage.getItem("username") === null) {

        window.location.href = "login.html";

    } else {

        $("#userName").html(localStorage.getItem("username"));
        getData();
        $("#SaveData").click(function () { // Recuperation des valeurs

            var name = $("#name").val();
            var ville = $("#ville").val();
            var prix = $("#prix").val();
            var nbrpersonne = $("#nbrpersonne").val();
            var type = $("#type").val();
            var dateR = $("#dateR").val();

 if (name != "" && ville != "" && prix != "" && nbrpersonne != "" && type != "" && dateR!= "" ) { // check les valeurs 
                $.ajax({
                    url: '/Ajouter',
                    type: 'post',
                    data: {
                        name,
                        ville,
                        prix,
                        nbrpersonne,
                        type,
                        dateR
                    },
                    success: function (response) {
                        if (response.request) {
                            //send fetched
                            getData(response);
                            $("#name").val('');
                            $("#ville").val('');
                            $("#prix").val('');
                            $("#nbrpersonne").val('');
                            $("#type").val('');
                            $("#dateR").val('');


            
                        }
                    }

                });
            }
        });

    }
});


function getData(fetched) {
    if (fetched === undefined) {
        $.ajax({
            url: '/salle',
            type: 'get',
            success: function (response) {
                if (response.request) {

                    // data correc
                    AddCards(response.data);

                }
            },
        });
    } else {
        AddCards(fetched.data);
    }
}


function AddCards(data) {

    var event_Data = '';
    $("#event").html(event_Data);  
    $.each(data, function (index, value) {

        event_Data += '<div class="col-md-4">';
        event_Data += '<div class="card-box">';
        event_Data += '<div class="card-title">';
        event_Data += '<img src="./Images/fetes.png " class="logo">';
        event_Data += '<h2> Nom:' + value.name + '</h2>';
        event_Data += '<p> ville:' + value.ville + '</p><br/>';
        event_Data += '<p> prix:' + value.prix + '</p>';
        event_Data += '<p> Personne:' + value.nbrpersonne + '</p>';
        event_Data += '<p>Type:' + value.type + '</p><br/>';
        event_Data += '<p> Date reservé:' + value.dateR + '</p>';
        event_Data += '</div>';
        event_Data += ' <div class="card-link">';
        event_Data += `<button type="button" data-toggle="modal" data-target="#UpdatePopUp" data-uid="1" 
        onclick="show(${index},'${value.name}','${value.ville}','${value.prix}',
        '${value.nbrpersonne}','${value.type}','${value.dateR}')"
         class="update btn btn-warning btn-sm">modifier</button>`;
        event_Data += ' <button type="button" data-toggle="modal" data-target="#DeletePopUp" data-uid="1" onclick="show(' + index +')"  class="update btn btn-warning btn-sm">supprimer</button>';
        event_Data += '</div>';
        event_Data += '</div>';
        event_Data += '</div>';
    });
    $("#event").append(event_Data);


}

function show(index,name,ville,prix,nbrpersonne,type,dateR) {
    localStorage.setItem("id", index);
    $("#nameUpdate").val(name);
    $("#villeUpdate").val(ville);
    $("#prixUpdate").val(prix);
    $("#nbrpersonneUpdate").val(nbrpersonne);
    $("#typeUpdate").val(type);
    $("#dateRUpdate").val(dateR);
}





                      