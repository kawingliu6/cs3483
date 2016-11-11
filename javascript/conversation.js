function myFunction() {
    var x = document.getElementById("chatroom").value;
    
    document.getElementById("demo").innerHTML += "Q: "+x+"</br>";
    
    x = document.getElementById("chatroom").value.toLowerCase();
    if (x=="hi") {
    document.getElementById("demo").innerHTML += "A: Hello!\n" + '<input type="button" class="voice" name="hello" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    
    // products
    //food
    }else if (x.includes("food a") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of food A : "+'<a href="food/foodA.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of food A " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("food b") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of food B : "+'<a href="food/foodB.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of food B " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("food c") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of food C : "+'<a href="food/foodC.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of food C " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("food d") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of food D : "+'<a href="food/foodD.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of food D " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("food e") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of food E : "+'<a href="food/foodE.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of food E " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("food f") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of food F : "+'<a href="food/foodF.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of food F " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    
    //house
    }else if (x.includes("house a") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of house A : "+'<a href="house/houseA.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of house A " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("house b") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of house B : "+'<a href="house/houseB.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of house B " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("house c") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of house C : "+'<a href="house/houseC.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of house C " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("house d") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of house D : "+'<a href="fhouse/houseD.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of house D " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("house e") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of house E : "+'<a href="house/houseE.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of house E " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }else if (x.includes("house f") ){ 
    document.getElementById("demo").innerHTML += "A: Here is the product page of house F : "+'<a href="house/houseF.html">link</a>'+"\n"+ '<input type="button" class="voice" name="Here is the product page of house F " value="Play voice!" onClick="return testFunction(this)" />'+"</br>";

    //medic
    
    //other
    
    //error message
    }else{
    document.getElementById("demo").innerHTML += "A: Sorry, I dont understand. \n"+ '<input type="button" class="voice" name="Sorry, I dont understand" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    
    document.getElementById("chatroom").value="";
}