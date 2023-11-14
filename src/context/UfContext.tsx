"use client";
import useFetch from "@/hooks/useFetch";
import { createContext, PropsWithChildren, useContext } from "react";

type ICovidData = {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  datetime: string;
};

type IContextCovid = {
  data: ICovidData[] | null;
  loading: boolean;
  error: string | null;
};

const CovidContext = createContext<IContextCovid | null>(null);

export const CovidUf = () => {
  const context = useContext(CovidContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const CovidContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<ICovidData[]>(
    "https://covid19-brazil-api.now.sh/api/report/v1/"
  );

  return (
    <CovidContext.Provider value={{ data, loading, error }}>
      {children}
    </CovidContext.Provider>
  );
};
