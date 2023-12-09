import { CovidUf } from "@/context/CovidContext";

export const StateSelect = () => {
  const { DATA_STATES_ID } = CovidUf();
  const { data, loading, error } = DATA_STATES_ID();
  console.log(data?.state);
  return <section className="mt-24 w-[600px] h-[500px] bg-slate-700"></section>;
};
