import React, { useState } from 'react'
import imageOne from '../../assets/images/poert1.png'
import imageTwo from '../../assets/images/port2.png'
import imageThree from '../../assets/images/port3.png'

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");


  const uniqueImages = [
    imageOne,
    imageTwo,
    imageThree,
  ];

  const images = [...uniqueImages, ...uniqueImages];

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <div className=" mt-[100px] min-h-[calc(100vh-112px)] flex-col items-center justify-center">

      <div className='title'>
              <h2 className=" text-center uppercase text-4xl font-bold pt-8 text-primary">
                Portfolio component
              </h2>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="line h-[4px] w-[90px] bg-primary"></div>
                <i className="fa-solid fa-star text-primary"></i>
                <div className="line h-[4px] w-[90px] bg-primary"></div>
              </div>
      </div>



      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 px-12 md:px-0 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group"
          >
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div
              className="cursor-pointer absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-75 flex items-center justify-center transition-opacity duration-300 rounded-lg"
              onClick={() => handleImageClick(image)}
            >
              <i className="fa-solid fa-plus text-white text-5xl font-bold"></i>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-blue-800 bg-opacity-25 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Enlarged"
              className="w-full max-w-3xl h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
