"use client";
import useFetch from "@/hooks/useFetch";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

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

type ICovidDataCountries = {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: string;
};

type IContextCovid = {
  DATA_STATES: () => {
    data: ICovidDataStates[] | null;
    loading: boolean;
    error: string | null;
  };
  DATA_COUNTRIES: () => {
    data: ICovidDataCountries[] | null;
    loading: boolean;
    error: string | null;
  };
  ufStates: string;
  setUfStates: Dispatch<SetStateAction<string>>;
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

  const [ufStates, setUfStates] = useState("sp");

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
    <CovidContext.Provider
      value={{ DATA_STATES, DATA_COUNTRIES, ufStates, setUfStates }}
    >
      {children}
    </CovidContext.Provider>
  );
};
