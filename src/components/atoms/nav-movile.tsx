interface Props {
  nombre: string;
}
export default function NavMovile({ nombre }: Props) {
  return (
    <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
      {nombre}
    </span>
  );
}
