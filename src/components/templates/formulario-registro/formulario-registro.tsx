import { Form, Formik } from "formik";
import { Boton, InputField } from "../../atoms";
import { validationSchema, valoresIniciales } from "./registro.data";
import { crearUsuairo } from "../../../services/endpoints";
export function FormularioRegistro() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={valoresIniciales()}
        validationSchema={validationSchema()}
        onSubmit={async (values) => {
          const { confirmarContrasena, ...data } = values;
          console.log(confirmarContrasena);

          await crearUsuairo(data);
        }}
      >
        <Form className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="w-96 text-2xl font-bold mb-6">Registro de Usuario</h2>
          <InputField
            label="Nombre"
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
          />
          <InputField
            label="Correo Electrónico"
            type="email"
            name="correo_electronico"
            placeholder="Ingrese su correo electrónico"
          />
          <InputField
            label="Contraseña"
            type="password"
            name="contrasena"
            placeholder="Ingrese su contraseña"
          />
          <InputField
            label="Confirmar Contraseña"
            type="password"
            name="confirmarContrasena"
            placeholder="Confirme su contraseña"
          />
          <Boton label="Registrarse" />
        </Form>
      </Formik>
    </div>
  );
}
