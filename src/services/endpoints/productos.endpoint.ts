import axios from "axios";

export async function obtenerProductos() {
  try {
    const response = await axios.get("http://localhost:3000/productos");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
