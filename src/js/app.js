const btnEnviar = document.querySelector('.btn'),
      nombre    = document.querySelector('#nombre'),
      email     = document.querySelector('#email'),
      textArea   = document.querySelector('#textArea'),
      form      = document.querySelector('.formulario'),
      datos     = {
          nombre:'',
          email:'',
          textArea:'',
      }

nombre.addEventListener('input',leertext);
email.addEventListener('input',leertext);
textArea.addEventListener('input',leertext);


form.addEventListener('submit',(e)=>{
     e.preventDefault();

     const {nombre,email, textArea} = datos;
     
     if(nombre === '' || email === ''|| textArea === ''  ){
          alerta('Todos los campos son obligatorios', true );
          return;
     }else{
          
          alerta('enviado correctamente')
     }
     
});

function alerta(e,error = null){
     const alerta = document.createElement('P');
     alerta.textContent = e;

     if(error){
          alerta.classList.add('error');
     }else{
          alerta.classList.add('envio');
     }

     form.appendChild(alerta);

     setTimeout(() => {
          alerta.remove();
     }, 4000);

}

function leertext(e) {
     datos[e.target.id] = e.target.value; 

}

      

