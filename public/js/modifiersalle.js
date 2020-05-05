$(document).ready(function () {

    
    $("#SaveUpdate").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var name = $("#nameUpdate").val();
        var ville = $("#villeUpdate").val();
        var prix = $("#nbrpersonneUpdate").val();
        var nbrpersonne = $("#typeUpdate").val();
        var type = $("#typeUpdate").val();
        var dateR = $("#dateRUpdate").val();       
       
             $.ajax({
                url:'/modifier',
                type:'post',
                data:{index:localStorage.getItem("id"),tache:{name,ville,prix,nbrpersonne,type,dateR}},
                success:function(response){
                  getData(response);
                }
               
            }); 

            
        
    });  
    $("#SaveUpdate").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var name = $("#nameUpdate").val();
        var ville = $("#villeUpdate").val();
        var prix = $("#prixUpdate").val();
        var nbrpersonne = $("#nbrpersonneUpdate").val();
        var type = $("#typeUpdate").val();
        var dateR = $("#dateRUpdate").val();
     
             $.ajax({
                url:'/modifier',
                type:'post',
                data:{index:localStorage.getItem("id"),tache:{name,ville,prix,nbrpersonne,type,dateR}},
                success:function(response){
                  getData(response);
                }
               
            }); 

            
        
    });  

});