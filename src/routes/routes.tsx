import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutBasica } from "../layout";
import { HomePage, ProductosPage, RegistroPage } from "../pages";
export function Rutas() {
  return (
    <BrowserRouter>
      <LayoutBasica>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/productos" Component={ProductosPage} />
          <Route path="/registro" Component={RegistroPage} />
        </Routes>
      </LayoutBasica>
    </BrowserRouter>
  );
}
