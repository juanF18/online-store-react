import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutBasica } from "../layout";
import {
  HomePage,
  PedidosPage,
  ProductosPage,
  RealizarPedidoPage,
  RegistroPage,
} from "../pages";
export function Rutas() {
  return (
    <BrowserRouter>
      <LayoutBasica>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/productos" Component={ProductosPage} />
          <Route path="/registro" Component={RegistroPage} />
          <Route path="/pedidos" Component={PedidosPage} />
          <Route path="/nuevo-pedido" Component={RealizarPedidoPage} />
        </Routes>
      </LayoutBasica>
    </BrowserRouter>
  );
}
