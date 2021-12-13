import Vue from "vue";


Vue.filter("vocales", value => {
  var texto = value.toLowerCase();
  var array = texto.split('');

  array.forEach(element => {
      switch(element){
        case "a":  texto = texto.replace("a","u");
          break;
        case "e":  texto = texto.replace("e","o");
          break;
        case "o": texto = texto.replace("o","e");
            break;
        case "u": texto = texto.replace("u","a");
          break;
        case " ":  
          break;
      }
    });
    
  return texto
});

Vue.filter("mayus", value => {
  return value.toUpperCase();
});

