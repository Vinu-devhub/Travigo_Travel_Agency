import React from 'react'

const Memory = ({memory : { title, subtitle, text, img, experience}}) => {
  return (
    <>
    <div className='relative my-16 md:mb-7'>
        <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
            <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
                <img src={img} alt="memory/img" className='w-auto object-fill' />
            </div>
            <div className='grid items-center w-full max-w-2xl lg:text-center'>
                <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg mb-4 md:mb-2'>{title}</h1>
                <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{subtitle}</h1>
                <p className='text-2xl text-gray-600 my-10 sm:text-base'>{text}</p>
                <div className='grid items-center grid-cols-3 gap-7 xl:gap-3'>
                    {
                        experience?.map((item, index) => (
                            <div key={index} className="bg-gradient-to-b from-emerald-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-300">
                                <h1 className='text-3xl xl:text-2xl sm:text-xl font-bold '>{item.number}</h1>
                                <p className='text-lg xl:text-base sm:text-sm xsm:text-xs font-medium'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Memory