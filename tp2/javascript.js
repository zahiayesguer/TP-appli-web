function validation ( )
{
    document.getElementById("resultat").setAttribute("hidden",'hidden');
    document.getElementById("error").setAttribute("hidden",'hidden');

    if (document.getElementById("nom").value.length < 5 && document.getElementById("nom").value.length > 0 ) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
}
else if (document.getElementById("nom").value.length == 0 ) {
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire !";
         document.getElementById("error").removeAttribute("hidden");
}

 
    else if (document.getElementById("prenom").value.length < 5 && document.getElementById("prenom").value.length > 0 ) {
        document.getElementById("error").innerHTML = "Le prénom doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
else if (document.getElementById("prenom").value.length == 0 ) {
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire !";
         document.getElementById("error").removeAttribute("hidden");
}
     
 
    else if (document.getElementById("adresse").value.length < 5 && document.getElementById("adresse").value.length > 0 ) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
else if (document.getElementById("adresse").value.length == 0 ) {
        document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire !";
         document.getElementById("error").removeAttribute("hidden");
}


    else if (document.getElementById("mail").value.length < 5 && document.getElementById("mail").value.length > 0 ) {
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }
else if (document.getElementById("mail").value.length == 0 ) {
        document.getElementById("error").innerHTML = "La saisie du mail est obligatoire !";
         document.getElementById("error").removeAttribute("hidden");
}

     else {
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue Mr,Mme: " + document.querySelector("#nom ").value + document.querySelector(" #prenom").value
     }
 }
