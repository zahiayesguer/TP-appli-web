$(document).ready(function () {
    console.log("DOM ready!");
var contactStore = (function () {
    
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function(_name, _firstname, _date, _adress, _mail) {
        var contact = { name: _name,
                        firstname: _firstname,
                        date: _date,
                        adress: _adress,
                        mail: _mail
        };
        // ajout du contact à la liste
        contactList.push(contact);
          
        return contactList;
      },
  
      getList: function() {
        return contactList;
      }
    }
  });

  $("#valide").on("click",function store(event) { 
    event.preventDefault();
    
        var inputNom= document.getElementById("name");
        var inputPrenom= document.getElementById("firstname");
        var inputDn= document.getElementById("birth");
        var inputAdresse= document.getElementById("adresse");
        var inputEmail= document.getElementById("mail");
        
        if($("#name").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
        
        localStorage.setItem("name", inputNom.value);
        localStorage.setItem("firstname", inputPrenom.value);
        localStorage.setItem("birth", inputDn.value);
        localStorage.setItem("adresse", inputAdresse.value);
        localStorage.setItem("mail", inputEmail.value);

       $('#success').addClass("alert alert-success").text("félicitation! votre formulaire est sauvegardé.");

      $("#table").show();
      $("#liste_des_contacts").show()
       
       document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
       .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname") +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
       }
      
       document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
       .innerHTML +'<tr><td>'+contactStore.getList.name.val()+
       '</td><td>'+localStorage.getItem("firstname") +
       '</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +
       localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
       
     
       
      
  });
});