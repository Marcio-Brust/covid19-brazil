import { CovidUf } from "@/context/CovidContext";

import { ErrorData } from "./ErrorData";
import Image from "next/image";

export const TableCountries = () => {
  const { DATA_COUNTRIES } = CovidUf();
  const { data, loading, error } = DATA_COUNTRIES();



  if (error) return <ErrorData />;
  if (loading) return <p>Loading....</p>;
  return (
    <table className="table table-cell mt-24">
      <thead>
        <tr>
          <th></th>
          <th>País</th>
          <th>Casos confirmados</th>
          <th>Mortes</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ country, confirmed, deaths }, index) => (
          <tr key={index}>
            <td>
              <Image
                src={`https:////upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_${country.replaceAll(
                  " ",
                  "_"
                )}.svg/22px-Flag_of_${country.replaceAll(" ", "_")}.svg.png`}
                width={0}
                height={0}
                alt="image"
                priority={true}
                className="cursor-pointer w-auto h-auto"
              />
            </td>
            <td>{country}</td>
            <td>{confirmed}</td>
            <td>{deaths}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
