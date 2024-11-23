import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let Links = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  let [open, setOpen] = useState(false)
  return (
    <>
      <nav className="shadow-md w-full fixed top-0 left-0  bg-primary z-20">
        <div className=" container md:flex justify-between items-center py-8 px-12 md:px-0 w-full">

          <Link
            to="/"
            className="md:text-3xl text-2xl font-bold uppercase text-white cursor-pointer"
          >
            Start framework
          </Link>

          <div onClick={()=> setOpen(!open)} className="text-3xl text-white absolute right-12 top-7 cursor-pointer md:hidden">
            <i className={open ? "fa-solid fa-close" : "fa-solid fa-bars"}></i>
          </div>

          <ul className={`md:flex md:items-center gap-10 text-white text-base font-bold uppercase md:py-0 py-5 absolute md:static bg-primary md:z-auto z-[-1]
          left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-20' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className="md:my-0 my-7">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-secondary py-3 px-2 rounded-md" : ""
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
