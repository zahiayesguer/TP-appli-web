 $( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
      

            $("#nom").keyup(function(){
                if(($("#nom").val().length < 5))
                {
                    $("#nom").css("border-color","#ff0000");
                }
                else
                {
                    $("#nom").css("border-color","#48DE14");
                }
            
            });
            $("#Prenom").keyup(function(){
                if(($("#Prenom").val().length < 5))
                {
                    $("#Prenom").css("border-color","#ff0000");
                }
                else
                {
                    $("Prenom").css("border-color","#48DE14");
                }
            
            });
            $("#Adresse").keyup(function(){
                if(($("#Adresse").val().length < 5))
                {
                    $("#Adresse").css("border-color","#ff0000");
                }
                else
                {
                    $("#Adresse").css("border-color","#48DE14");
                }
            
            });
            $("#datedenaissance").keyup(function(){
                if(($("#datedenaissance").val().length < 5))
                {
                    $("#datedenaissance").css("border-color","#ff0000");
                }
                else
                {
                    $("#datedenaissance").css("border-color","#48DE14");
                }
            
            });
            $("#email").keyup(function(){
                if(($("#email").val().length < 5))
                {
                    $("#email").css("border-color","#ff0000");
                }
                else
                {
                    $("#email").css("border-color","#48DE14");
                }
            
            });

            $("#nom").keydown(function(){
                if(($("#nom").val().length < 5))
                {
                    $("#nom").css("border-color","#ff0000");
                }
                else
                {
                    $("#nom").css("border-color","#48DE14");
                }
            
            });
            $("#Prenom").keydown(function(){
                if(($("#Prenom").val().length < 5))
                {
                $("#Prenom").css("border-color","#ff0000");
                }
                else
                {
                    $("#Prenom").css("border-color","#48DE14");
                }
            
            });
            $("#Adresse").keydown(function(){
                if(($("#Adresse").val().length < 5))
                {
                    $("#Adresse").css("border-color","#ff0000");
                }
                else
                {
                    $("#Adresse").css("border-color","#48DE14");
                }
            
            });
            $("#datedenaissance").keydown(function(){
                if(($("#datedenaissance").val().length < 5))
                {
                    $("#datedenaissance").css("border-color","#ff0000");
                }
                else
                {
                    $("#datedenaissance").css("border-color","#48DE14");
                }
            
            });
            $("#email").keydown(function(){
                if(($("#email").val().length < 5))
                {
                    $("#email").css("border-color","#ff0000");
                }
                else
                {
                    $("#email").css("border-color","#48DE14");
                }
            
            });



            $("#envoyer").on("click", function (event) {
            event.preventDefault();
 
                if($("#nom").val().length < 5)
                {
                    $('#myModal').modal("show");
                    $(".modal-title").text(" Veuillez remplir tout les champs");
                    $('.modal-body').text(" le champs nom doit contenir au moins 5 caractères ");
                }
                    else
                    { 
                        if($("#Prenom").val().length < 5)
                        {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs Prenom doit contenir au moins 5 caractères ");
                        }

                        else 
                        {
                            if($("#Adresse").val().length < 5)
                            {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs Adresse doit contenir au moins 5 caractères ");
                            }
                            else 
                            {
                                if($("#datedenaissance").val().length < 5)
                                {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs date de naissance doit contenir au moins 5 caractères ");
                                }
                                else
                                {
                                        if($("#email").val().length < 5)
                                        {
                                        $('#myModal').modal("show");
                                        $(".modal-title").text(" Veuillez remplir tout les champs !");
                                        $('.modal-body').text(" le champs email doit contenir au moins 5 caractères ");
                                        }
                                        else
                                        {
                                            if($("#nom").val() !== "" && $("#Prenom").val() !== "" && $("#datedenaissance").val() !== "" 
                                            && $("#Adresse").val() !== "" && $("#email").val() !== "" )
                                            {
                                                    $('#myModal').modal("show");
                                                    $(".modal-title").html("Bienvenue "+ document.querySelector("#Prenom").value);
                                                    $('.modal-body').html("Vous étes né le: "+ document.querySelector("#datedenaissance").value
                                                    +"</br>Et vous Habitez à: "
                                                    + document.querySelector("#Adresse").value
                                                    +'</br><a href="https://maps.google.com/maps?q='
                                                    +document.querySelector("#Adresse").value
                                                    +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
                                                    +document.querySelector("#Adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
                                            }
                                                        
                                        }
                                                    
                                }
                                                    
                            }
                            
                            
                        }
                        
                        
                    }
                
        
    });
  });

    
