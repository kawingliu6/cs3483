function myFunction() {
    var x = document.getElementById("chatroom").value;
    
    document.getElementById("demo").innerHTML += "Q: "+x+"</br>";
    
    x = document.getElementById("chatroom").value.toLowerCase();
    if (x=="hi") {
    document.getElementById("demo").innerHTML += "A: Hello!\n" + '<input type="button" class="voice" name="hello" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    if (x=="can i kill justin") {
    document.getElementById("demo").innerHTML += "A: Go Ahead!"+ '<input type="button" class="voice" name="go ahead" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    if (x=="how should i kill him") {
    document.getElementById("demo").innerHTML += "A: Cut J first!\n"+ '<input type="button" class="voice" name="cut J first" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    if (x=="am i handsome") {
    document.getElementById("demo").innerHTML += "A: Yes!\n"+ '<input type="button" class="voice" name="yes" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    if (x=="yo") {
    document.getElementById("demo").innerHTML += "A: yooooooooooooo!\n"+ '<input type="button" class="voice" name="yoooooooo" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    if (x=="hi dickson") {
    document.getElementById("demo").innerHTML += "A: dicksonnnnnnnnnnnnnnnnnnnn\n"+ '<input type="button" class="voice" name="dickson" value="Play voice!" onClick="return testFunction(this)" />'+"</br>";
    }
    
    
    document.getElementById("chatroom").value="";
}