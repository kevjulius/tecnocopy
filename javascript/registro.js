$(document).ready(function () {
  $("#registroForm").submit(function (event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente

      // Obtener los valores de los campos
      var nombres = $("#nombres").val();
      var apellidos = $("#apellidos").val();
      var correo = $("#correo").val();
      var contraseña = $("#contraseña").val();
      var confirmarContraseña = $("#confirmar_contraseña").val();

      // Validar campos vacíos
      if (nombres.trim().length === 0 || apellidos.trim().length === 0 || correo.trim().length === 0 ||
          contraseña.trim().length === 0 || confirmarContraseña.trim().length === 0) {
          alert("Todos los campos son obligatorios y no deben ser vacíos");
          return false;
      }

      // Validar formato de correo electrónico
      var formatoCorreo = /\w+@\w+\.+[a-z]/;
      if (!formatoCorreo.test(correo)) {
          alert("Ingrese un correo electrónico válido");
          return false;
      }

      // Validar coincidencia de contraseñas
      if (contraseña !== confirmarContraseña) {
          alert("Las contraseñas no coinciden");
          return false;
      }

     
      this.submit();
  });
});





