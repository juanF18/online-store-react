import axios from "axios";
import { Usuario } from "../../interfaces/usuario.intefaces";

export async function crearUsuairo(values: Usuario) {
  try {
    const response = await axios.post(
      "http://localhost:3000/usuarios",
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert(`Usuairo creado: ${response.data.nombre}`);
    return response.data;
  } catch (error) {
    alert(`Error al crear usuario: ${error}`);
  }
}
