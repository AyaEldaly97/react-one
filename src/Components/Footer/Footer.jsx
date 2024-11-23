import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-white bottom-0 py-12 px-9 ">
        <div className="grid grid-cols-1 sm:grid-cols-3  text-center gap-11 m-4">
          <div>
            <h3 className="text-2xl font-semibold py-2">LOCATION</h3>
            <p className="text-base pb-3">2215 John Daniel Drive</p>
            <p className="text-base">Clark, MO 65243</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold py-2">AROUND THE WEB</h3>
            <div className="icons flex flex-wrap items-center justify-center gap-2">
              <div className="w-10 h-10 text-center cursor-pointer  border-2 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="w-10 h-10 text-center cursor-pointer  border-2 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className='w-10 h-10 text-center cursor-pointer  border-2 rounded-full flex items-center justify-center'>
                <i className='fa-brands fa-linkedin-in text-xl'></i>
              </div>
              <div className='w-10 h-10 text-center cursor-pointer  border-2 rounded-full flex items-center justify-center'>
                < i className='fa-solid fa-globe text-xl'></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold py-2">ABOUT FREELANCER</h3>
            <p className="text-base">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </footer>
      <div className="bg-teritary py-5">
        <p className="text-base text-white text-center">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
