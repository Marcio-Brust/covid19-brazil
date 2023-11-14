import { CovidUf } from "@/context/UfContext";
import Image from "next/image";
import Link from "next/link";

export const Table = () => {
  const { data, loading, error } = CovidUf();

  /*   const [uf, setUf] = useState<string>(""); */

  if (loading) return <p>Loading....</p>;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Uf</th>
          <th>Estado</th>
          <th>Suspeitas</th>
          <th>Mortes</th>
          <th>Casos</th>
          <th>Último caso</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ state, suspects, deaths, cases, datetime, uf, uid }) => (
          <tr key={uid}>
            <td>
              <Image
                src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}
                width={30}
                height={30}
                alt="image"

                /*  <Link href={/} /> */
              />
            </td>
            <td>{state}</td>
            <td>{suspects}</td>
            <td>{deaths}</td>
            <td>{cases}</td>
            <td>{datetime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
