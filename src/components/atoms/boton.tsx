interface BotonProps {
  label: string;
}
export function Boton({ label }: BotonProps) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
    >
      {label}
    </button>
  );
}
