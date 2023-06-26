import * as Yup from "yup";

export function valoresIniciales() {
  return {
    nombre: "",
    email: "",
    contrasena: "",
    confirmarContrasena: "",
  };
}

export function validationSchema() {
  return Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    contrasena: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
    confirmarContrasena: Yup.string()
      .oneOf(
        [Yup.ref("contrasena"), undefined],
        "Las contraseñas deben coincidir"
      )
      .required("La confirmación de contraseña es requerida"),
  });
}
