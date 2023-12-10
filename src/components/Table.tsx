import { CovidUf } from "@/context/CovidContext";
import Image from "next/image";
import { ErrorData } from "./ErrorData";

export const Table = () => {
  const { DATA_STATES, setUfStates } = CovidUf();
  const { data, loading, error } = DATA_STATES();

  if (error) return <ErrorData />;
  if (loading) return <p>Loading....</p>;
  return (
    <table className="table table-cell w-auto mt-24">
      <thead>
        <tr>
          <th></th>
          <th>Estado</th>
          <th>Mortes</th>
          <th>Casos</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ state, deaths, cases, uf, uid }) => (
          <tr key={uid} onClick={() => setUfStates(uf)}>
            <td>
              <Image
                src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}
                width={0}
                height={0}
                alt="image"
                priority={true}
                className="cursor-pointer w-auto h-auto"
              />
            </td>
            <td>{state}</td>
            <td>{deaths}</td>
            <td>{cases}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
