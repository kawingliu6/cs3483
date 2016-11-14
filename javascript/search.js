  var searchProduct = function(event) {
    
    var myNode = document.getElementById("result");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    var target=event.target.files[0].name;
    var img = new Array(5);
    if (target.includes("other")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/other'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    if (target.includes("food")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/food'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    if (target.includes("house")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/house'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    if (target.includes("medic")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/medic'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    if (target.includes("cloth")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/cloth'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
}

  var searchProductByText = function() {
    
    var myNode = document.getElementById("result");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    
    var searchText = document.getElementById('search_bar').value;
    
    var image = new Image();
    image.src = 'image/'+searchText+'.jpg';
    image.style.height = '200px';
    document.getElementById('result').appendChild(image);
    
    image.onerror = function () {

    myNode.removeChild(myNode.firstChild);
    
    var img = new Array(5);
    if (searchText.includes("other")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/other'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    else if (searchText.includes("food")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/food'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    else if (searchText.includes("house")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/house'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    else if (searchText.includes("medic")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/medic'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }
    else if (searchText.includes("cloth")) {
        for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src = 'image/cloth'+String.fromCharCode(65+i)+'.jpg';
        img[i].style.height = '200px';
        document.getElementById('result').appendChild(img[i]);
        }
    }else{
      document.getElementById('result').innerHTML="no result found";
    }
    }
}

  window.onload = function() {
        var myNode = document.getElementById("result");
    
        if (window.location.href.includes("?")) {
          var url = window.location.href.split("?");
          var searchText=url[1];
          
          
          var image = new Image();
          image.src = 'image/'+searchText+'.jpg';
          image.style.height = '200px';
          document.getElementById('result').appendChild(image);
            
          image.onerror = function () {
          myNode.removeChild(myNode.firstChild);
          
          var img = new Array(5);
          if (searchText.includes("other")) {
              for(i=0;i<6;i++){
              img[i] = new Image();
              img[i].src = 'image/other'+String.fromCharCode(65+i)+'.jpg';
              img[i].style.height = '200px';
              document.getElementById('result').appendChild(img[i]);
              }
          }
          else if (searchText.includes("food")) {
              for(i=0;i<6;i++){
              img[i] = new Image();
              img[i].src = 'image/food'+String.fromCharCode(65+i)+'.jpg';
              img[i].style.height = '200px';
              document.getElementById('result').appendChild(img[i]);
              }
          }
          else if (searchText.includes("house")) {
              for(i=0;i<6;i++){
              img[i] = new Image();
              img[i].src = 'image/house'+String.fromCharCode(65+i)+'.jpg';
              img[i].style.height = '200px';
              document.getElementById('result').appendChild(img[i]);
              }
          }
          else if (searchText.includes("medic")) {
              for(i=0;i<6;i++){
              img[i] = new Image();
              img[i].src = 'image/medic'+String.fromCharCode(65+i)+'.jpg';
              img[i].style.height = '200px';
              document.getElementById('result').appendChild(img[i]);
              }
          }
          else if (searchText.includes("cloth")) {
              for(i=0;i<6;i++){
              img[i] = new Image();
              img[i].src = 'image/cloth'+String.fromCharCode(65+i)+'.jpg';
              img[i].style.height = '200px';
              document.getElementById('result').appendChild(img[i]);
              }
          }else{
            document.getElementById('result').innerHTML="no result found";
          }
        }
    }
  }