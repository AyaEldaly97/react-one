import React from 'react'

export default function Contact() {
  return <>
    <div className=" mt-[100px] min-h-[calc(100vh-112px)] flex-col items-center justify-center">

      <div className='title pt-12'>
              <h2 className=" text-center uppercase text-4xl font-bold pt-8 text-primary">
              conatct section
              </h2>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="line h-[4px] w-[90px] bg-primary"></div>
                <i className="fa-solid fa-star text-primary"></i>
                <div className="line h-[4px] w-[90px] bg-primary"></div>
              </div>
      </div>



      <div className="container mx-auto">
        <form className='space-y-3 w-1/2 mx-auto py-10'>
          <div>
            <input className='form-control' type="text" placeholder='userName' />
            <input className='form-control' type="text" placeholder='userAge' />
            <input className='form-control' type="text" placeholder='userEmail' />
            <input className='form-control' type="text" placeholder='userPassword' />
          </div>

          <button type='button' className='btn'>Send Message</button>
        </form>
      </div>
    </div>
  </>
}