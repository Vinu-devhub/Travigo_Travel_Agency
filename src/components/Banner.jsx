import React from 'react'

const Banner = ({bannerAPI : {title, text, btnText, imgSrc}}) => {
  return (
    <>
        <div className='relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[85vw] rounded-lg'>
            <div className='relative flex items-center'> 
                <img className='h-[50vh] w-full rounded-lg' src={imgSrc} alt="banner/img" />
            </div>
            <div className='absolute top-12 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14'>
                <h1 className='text-3xl md:text-2xl font-bold text-slate-900 drop-shadow-lg filter mb-4'>{title}</h1>
                <p className='text-2xl text-gray-900 sm:text-sm mb-4'>{text}</p>
                <button className='py-3 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110'>{btnText}</button>
            </div>
        </div>
    </>
  )
}

export default Banner