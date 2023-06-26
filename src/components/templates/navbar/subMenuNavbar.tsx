import { NavLink } from "react-router-dom";
import NavMovile from "../../atoms/nav-movile";

export default function SubMenuNavbar() {
  return (
    <div className="md:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <NavLink to="/productos">
          <NavMovile nombre="Productos" />
        </NavLink>
        <NavLink to="/nuevo-pedido">
          <NavMovile nombre="Realizar Pedido" />
        </NavLink>
        <NavLink to="/pedidos">
          <NavMovile nombre="Vizualizar Pedidos" />
        </NavLink>
        <NavLink to="/registro">
          <NavMovile nombre="Registro" />
        </NavLink>
      </div>
    </div>
  );
}
