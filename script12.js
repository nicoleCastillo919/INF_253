const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");


buttons.forEach(function(button)){

  button.addEventListen("click", function() {
  
    details.forEach(function(){
        item.hidden = true;    
    });

    const target = button.dataset.target;
    document.getElementById(target).hidden = false;
    


  });
};
