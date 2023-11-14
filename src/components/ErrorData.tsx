import React from "react";

export const ErrorData = () => {
  return (
    <div className="flex flex-col justify-center h-[500px] text-lg">
      <h1 className="text-lg text-red-500">
        Dados indisponíveis temporariamente, tente mais tarde.
      </h1>
    </div>
  );
};
