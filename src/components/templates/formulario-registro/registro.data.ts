import * as Yup from "yup";
import { Usuario } from "../../../interfaces/usuario.intefaces";

interface ValoresUsuario extends Usuario {
  confirmarContrasena: string;
}

export function valoresIniciales() {
  const valoresIniciales = {
    nombre: "",
    correo_electronico: "",
    contrasena: "",
    confirmarContrasena: "",
  };
  return valoresIniciales;
}

export function validationSchema() {
  return Yup.object().shape({
    nombre: Yup.string()
      .required("El nombre es requerido")
      .min(3, "El nombre es de minimo 3 caracteres"),
    correo_electronico: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    contrasena: Yup.string()
      .min(8, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
    confirmarContrasena: Yup.string()
      .oneOf(
        [Yup.ref("contrasena"), undefined],
        "Las contraseñas deben coincidir"
      )
      .required("La confirmación de contraseña es requerida"),
  });
}
