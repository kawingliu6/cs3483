        function zoom(img){
         document.getElementById("zoomImage").src = img.src;
         document.getElementById("productLink").href=img.name+".html";
         
         if (img.id=="productA") {
            document.getElementById("imageDescription").innerHTML = img.alt;
         }if (img.id=="productB") {
            document.getElementById("imageDescription").innerHTML = img.alt;
         }if (img.id=="productC") {
            document.getElementById("imageDescription").innerHTML = img.alt;
         }if (img.id=="productD") {
            document.getElementById("imageDescription").innerHTML = img.alt;
         }if (img.id=="productE") {
            document.getElementById("imageDescription").innerHTML = img.alt;
         }if (img.id=="productF") {
            document.getElementById("imageDescription").innerHTML = img.alt;
         }
         
        }