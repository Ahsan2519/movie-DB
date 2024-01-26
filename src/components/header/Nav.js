import React from "react";
import { navData } from "../../lib/constant/ConstantVal";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="bg-headerolor px-10 py-5  text-white ">
      <div className="wrapper flex justify-between mx-auto items-center">
        <h1 className="font-semibold text-xl">MovieDb</h1>
        <div className="flex ">
          <ul className="flex gap-6 mr-4 items-center">
            {navData.map((navItems) => {
              return (
                <li
                  key={navItems.navName}
                  className="text-headerTxtColor font-semibold"
                >
                  <Link to={navItems.url}>{navItems.navName}</Link>
                </li>
              );
            })}
          </ul>
          <form action="#" method="post" className="flex justify-between">
            <div className="basis-[70%]">
              <input
                type="text"
                placeholder="Movie Name"
                name="movieName"
                className="text-headerolor py-2 px-4 rounded-sm w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-btnbg px-3 text-center rounded-sm font-semibold text-lg hover:text-btnbg hover:bg-white transition-all duration-300 border-transparent border-2 hover:border-btnbg"
            >
              Search{" "}
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Nav;
