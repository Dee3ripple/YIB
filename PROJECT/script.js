 function changeStyle1 () {

    var paragraph = document.getElementsByClassName("para") ;

    
    var firstParaText = paragraph[0].innerHTML ;
    var secondParaText = paragraph[1].innerHTML;
    var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;

    var firstParaText = paragraph[0].innerHTML =" " ;
    var secondParaText = paragraph[1].innerHTML =" ";
 }

  //  for(var i=0; i < paragraph.length; i++) {

  //      paragraph[i].style.color ="red";
   //     paragraph[i].innerHTML = "New Text";

  //  }

  function changeStyle() {

    document.getElementById("image").src="img2.jpg";
  }

  function changeBackground () {

    var text = document.getElementById("para1").style.backgroundColor="blue";
  }

  function backToNormal () {

    var text = document.getElementById("para1").style.backgroundColor="";
  }



  function newPicture() {

    document.getElementById("image").src="img5.jpg";
  }


  function oldPicture() {

    document.getElementById("image").src="img3.jpg";
  }


  function newParagraph() {

    // heading

    var elementH = document.createElement("h2");

    var main = document.getElementById("main");

    main.appendChild(elementH);

    var textH = document.createTextNode("Arist");

    elementH.appendChild(textH);

    //Paragraph

    var element = document.createElement("p");

     main.appendChild(element);

    var text = document.createTextNode( "The estate is all that an Hiltonian of the 1870's would  recognise in the Hilton of the 1990's, for he, like the present day pupil, wandered over the country side and knew Rolling Stones,innacles, Gwen's and the rest. " );

     element.appendChild(text);
  }



    


