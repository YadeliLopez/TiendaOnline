var btn = document.getElementById('boton');
var clave = document.getElementById('contra');
var clave2 =document.getElementById('contra2');
var usuario = document.getElementById('usuario');

boton.addEventListener('click', function(e){

    if(clave.value && clave2 === ''){
  
      alert('el campo contraseña es obligatorio')
      e.preventDefault();
      return false;
  
    }else if(usuario.value === ''){
  
      alert('el campo de usuario es obligatorio')
      e.preventDefault();
      return false;
  
    }else if(clave.value.length < 8 ){
  
      alert('Ingresa una contraseña de al menos 8 caracteres')
      e.preventDefault();
      return false;
  
    } else if(clave.value == clave2.value){
      window.location.href = "/PaginaPrinci/principal.html";
      alert('Bienvenido');
      return true;
  
    }else if (clave != clave2){
      alert("Las contraseñas no coinciden");
      return false;
  
    }
  });