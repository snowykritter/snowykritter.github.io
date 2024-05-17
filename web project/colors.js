function changeColor(){
    var x = document.getElementById("the-color");
    var currentVal = x.value;
    var alltext = document.getElementsByTagName("*");
    for (var i=0, max=alltext.length; i < max; i++) {
      alltext[i].style.color = currentVal;
    }
    alert("text color changed successfully!");
    return;
  }

  function changeBgColor(){
    var x = document.getElementById("the-bg-color");
    var currentVal = x.value;
    document.body.style.backgroundColor = currentVal;
    alert("background color changed successfully!");
    return;
  }

  function resetColor(){
    var x = document.getElementById("the-color");
    var currentVal = x.value;
    var alltext = document.getElementsByTagName("*");
    for (var i=0, max=alltext.length; i < max; i++) {
      currentVal = "";
      alltext[i].style.color = currentVal;
    }
    return;
  }

  function resetBgColor(){
    document.body.style.backgroundColor = "";
    return;
  }