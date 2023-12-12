import { useEffect, useState } from "react";
import { CovidUf } from "@/context/CovidContext";
import { ErrorData } from "./ErrorData";
import Image from "next/image";

type ICovidDataStates = {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  datetime: string;
};

export const StateSelect = () => {
  const { ufStates } = CovidUf();
  const [data, setData] = useState<ICovidDataStates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const handleStates = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(
          `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${ufStates}`,
          {
            signal,
          }
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = (await response.json()) as ICovidDataStates;
        setData(json);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    handleStates();

    return () => {
      controller.abort();
    };
  }, [ufStates]);

  if (error) return <ErrorData />;

  return (
    <section className="mt-24 p-10 w-[400px] h-[400px] max-lg:hidden">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="grid justify-center gap-4">
            <Image
              src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${data?.uf}.png`}
              width={100}
              height={0}
              alt="image"
              priority={true}
              className=""
            />
            <h1 className="text-center font-bold ">{data?.state}</h1>
          </div>
          <div className="mt-10 grid grid-cols-2 text-xs gap-4">
            <span>Mortes: {data?.deaths}</span>
            <span>Suspeitas: {data?.suspects}</span>
            <span>Recuperados: {data?.refuses}</span>
            <span>Último caso: {data?.datetime}</span>
            <span>Casos: {data?.cases}</span>
          </div>
        </>
      )}
    </section>
  );
};
