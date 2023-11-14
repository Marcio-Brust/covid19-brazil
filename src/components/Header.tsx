import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-center bg-primary text-white font-bold">
      <ul className="flex gap-28">
        <li>
          <a className="block px-[30px] py-[20px] hover:link" href="/">
            Brazil
          </a>
        </li>
        <li>
          <a className="block px-[30px] py-[20px] hover:link" href="/countries">
            Países
          </a>
        </li>
      </ul>
    </header>
  );
};
