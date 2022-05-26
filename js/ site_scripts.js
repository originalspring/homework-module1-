var socialIcon = ["partner-bustour.png","partner-cabinrental.png","partner-campingadv.png","partner-collegetour.png"];//empty array
var imageList = [];
var image;
var openList = "<li id='socialIcon'>";
var closeList = "</li>"




for (var i=0; i<4; i++){
    //socialIcon[i];
    var openImage = "<image src='image/partner/'" + socialIcon[i] + '>';

   image = openList + openImage +  closeList;

   imageList.push(image);
}


var partner = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>"; 

//create a loop to create 6 images starting with index of 0

    //create a loop to create 6 images starting with index of 0
    for (var i=0; i<6; i++) {
        fileNames.push("partnerimage"+(i+1));
        partner.push("<img src='images/" + fileNames[i] + ".png'>");
        image = openList + partner[i] + closeList;
        imageList.push(image);
        }

    //display all six image codes stored in the array
    document.getElementById("partners").innerHTML = imageList;