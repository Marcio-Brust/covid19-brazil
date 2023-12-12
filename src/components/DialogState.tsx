import Image from "next/image";
import { ComponentProps } from "react";

type IPropsDialog = ComponentProps<"dialog"> & {
  uf: {
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
  };
};

export const DialogState = ({ uf, ...props }: IPropsDialog)=> {

  console.log(uf)
  return (
    <dialog id="my_modal_2" className="modal" {...props}>
      <div className="modal-box flex flex-col items-center justify-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <Image
          src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf.uf}.png`}
          width={50}
          height={0}
          alt="image"
          priority={true}
          className="cursor-pointer mb-5"
        />
        <h3 className="font-bold text-lg text-center">{uf.state}</h3>
        <div className="mt-10 grid grid-cols-2 text-xs gap-4">
          <span>Mortes: {uf.deaths}</span>
          <span>Suspeitas: {uf.suspects}</span>
          <span>Recuperados: {uf.refuses}</span>
          <span>Último caso: {uf.datetime}</span>
          <span>Casos: {uf.cases}</span>
        </div>
      </div>
    </dialog>
  );
};
