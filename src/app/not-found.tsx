import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-72 text-center flex flex-col justify-center gap-10">
      <h1 className="text-lg text-red-500">Error! Página não encontrada.</h1>
      <Link className="link text-blue-700" href="/">
        Retornar à página principal.
      </Link>
    </section>
  );
}
