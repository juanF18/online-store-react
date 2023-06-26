import { useEffect, useState } from "react";
import { Producto } from "../../../interfaces/producto.interface";
import { obtenerProductos } from "../../../services/endpoints";

export function ListaProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const peticionProductos = async () => {
      const response = await obtenerProductos();
      setProductos(response);
    };

    peticionProductos();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Listado de Productos</h2>
      <ul>
        {productos.map((product) => (
          <li
            key={product.id}
            className="bg-gray-200 p-4 mb-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{product.nombre}</h3>
            <p className="text-gray-700 mb-2">Precio: {product.precio}</p>
            <p className="text-gray-700">{product.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
