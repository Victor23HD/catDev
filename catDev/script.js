
  let cat = document.getElementById("cat");
  cat.style.position="relative";
  cat.style.textAlign="center";

  let txt = document.getElementById("txt");
  txt.style.textAlign="center";
  txt.style.fontSize="14pt";

//--------------------------------------------

$(window).load(function (){
    var lines = 0;
    setInterval(function () {
      lines = lines +1;
      $("#write").text(lines + " linhas de código");
    }, 1000);
  });
  