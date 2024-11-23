import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-secondary mt-[100px] min-h-[calc(100vh-112px)] flex items-center justify-center">
        <div className="container flex justify-center items-center text-white">
          <div>

            <div>
              <h2 className=" text-center uppercase text-4xl font-bold pt-8">
                about component
              </h2>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="line h-[4px] w-[90px] bg-white"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line h-[4px] w-[90px] bg-white"></div>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-11 px-24">
            <div>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
