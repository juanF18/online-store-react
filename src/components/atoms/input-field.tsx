import { Field, useField } from "formik";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}
export function InputField({
  label,
  type,
  placeholder,
  name,
}: InputFieldProps) {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label htmlFor={field.name} className="block font-bold mb-2">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        id={field.name}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 mt-2">{meta.error}</p>
      )}
    </div>
  );
}
