import Image from "next/image";
import { ComponentProps, forwardRef } from "react";

type IPropsDialog = ComponentProps<"dialog"> & {
  modal: {
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
  };
};

// eslint-disable-next-line react/display-name
export const DialogState = forwardRef<HTMLDialogElement, IPropsDialog>(
  ({ modal, ...props }, ref) => {
    return (
      <dialog id="my_modal_2" className="modal" {...props} ref={ref}>
        <div className="modal-box flex flex-col items-center justify-center">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Image
            src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${modal.uf}.png`}
            width={100}
            height={0}
            alt="image"
            priority={true}
            className="cursor-pointer mb-5"
          />
          <h3 className="font-bold text-lg text-center">{modal.state}</h3>
          <div className="mt-10 grid grid-cols-2 text-xs gap-4">
            <span>Mortes: {modal.deaths}</span>
            <span>Suspeitas: {modal.suspects}</span>
            <span>Recuperados: {modal.refuses}</span>
            <span>Último caso: {modal.datetime}</span>
            <span>Casos: {modal.cases}</span>
          </div>
        </div>
      </dialog>
    );
  }
);
