import React from 'react'
import heroImage from '../../assets/images/avataaars.svg'

export default function Home() {
  return (<>
    <div className='bg-secondary mt-[100px] min-h-[calc(100vh-112px)] flex items-center justify-center'>
      <div className='flex justify-center items-center text-center text-white'>
        <div>
          <img src={heroImage} alt="" className='mx-auto w-[250px]'/>
          <h2 className='uppercase text-4xl font-bold pt-8'>Start framework</h2>
          <div className='flex items-center justify-center gap-4 py-4'>
            <div className='line h-[4px] w-[90px] bg-white'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line h-[4px] w-[90px] bg-white'></div>
          </div>
          <p className='text-base'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  
  
  </>
  )
}
