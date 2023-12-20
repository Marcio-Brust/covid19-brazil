import { CovidUf } from "@/context/CovidContext";
import Image from "next/image";
import { ErrorData } from "./ErrorData";
import { DialogState } from "./DialogState";

import { useState } from "react";
import useMedia from "@/hooks/useMedia";

export const Table = () => {
  const mobile = useMedia("(max-width:65rem)");
  const { DATA_STATES, setUfStates } = CovidUf();
  const { data, loading, error } = DATA_STATES();
  const [modal, setModal] = useState({
    uf: "SP",
    state: "",
    cases: 0,
    deaths: 0,
    suspects: 0,
    refuses: 0,
    datetime: "",
  });

  if (error) return <ErrorData />;
  if (loading) return null;
  return (
    <>
      <div
        data-mobile={mobile}
        className="data-[mobile=false]:overflow-x-auto bg-scroll h-96 mt-32"
      >
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th>Estado</th>
              <th>Mortes</th>
              <th>Casos</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              ({
                state,
                deaths,
                cases,
                uf,
                uid,
                datetime,
                refuses,
                suspects,
              }) => (
                <tr
                  key={uid}
                  onClick={() => {
                    setUfStates(uf);
                    //@ts-ignore
                    document.getElementById("my_modal_2")?.showModal();
                    setModal({
                      uf,
                      state,
                      cases,
                      deaths,
                      suspects,
                      refuses,
                      datetime,
                    });
                  }}
                  className="cursor-pointer"
                >
                  <td>
                    <Image
                      src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}
                      width={50}
                      height={0}
                      alt="image"
                      priority={true}
                      className="cursor-pointer"
                    />
                  </td>
                  <td>{state}</td>
                  <td>{deaths}</td>
                  <td>{cases}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {mobile ? <DialogState modal={{ ...modal }} /> : null}
    </>
  );
};
