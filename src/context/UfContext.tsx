"use client";
import useFetch from "@/hooks/useFetch";
import { type } from "os";
import { createContext, PropsWithChildren, useContext } from "react";

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

type IContextCovid = {
  DATA_STATES: () => {
    data: ICovidDataStates[] | null;
    loading: boolean;
    error: string | null;
  };
};

const CovidContext = createContext<IContextCovid | null>(null);

export const CovidUf = () => {
  const context = useContext(CovidContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const CovidContextProvider = ({ children }: PropsWithChildren) => {
  const BASE_URL = "https://covid19-brazil-api.now.sh/api/report/v1/";

  const DATA_STATES = () => {
    const { data, loading, error } = useFetch<ICovidDataStates[]>(
      `${BASE_URL}`
    );

    return { data, loading, error };
  };

  const DATA_COUNTRIES = () => {
    const { data, loading, error } = useFetch<ICovidDataCountries[]>(
      `${BASE_URL}countries`
    );

    return { data, loading, error };
  };

  return (
    <CovidContext.Provider value={{ DATA_STATES }}>
      {children}
    </CovidContext.Provider>
  );
};
