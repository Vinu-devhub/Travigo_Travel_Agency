import React from 'react'

const Footer = ({footerAPI : {titles, links, sociallinks}}) => {

  const year = new Date().getFullYear()

  return (
    <>
      <footer className='bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7 '>
        <div className='grid items-center grid-cols-3 justify-items-center'>
          {
            titles?.map((item, index) => (
              <div key={index} className="grid items-center justify-items-center">
                <h1 className='text-xl lg:text-base uppercase font-semibold'>{item.title}</h1>
              </div>
            ))
          }
          {
            links?.map((list, i) => (
                <ul key={i} className="grid items-center justify-items-center gap-1">
                  {
                    list?.map((val, k) => (
                      <li key={k} className="font-mono text-sm sm:text-xs">{val.link}</li>
                    ))
                  }
                </ul>
            ))
          }
        </div>
        <div className='w-7/12 lg:w-[95vw] m-auto mt-9'>
          <div className='h-[0.1vh] bg-black/30 my-7 md:my-5'></div>
          <div className='flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse'>
            <p className='text-sm md:text-center'>Copyright &copy; {year} by Travigo. All rights reserved.</p>
            <div className='flex items-center gap-3 '>
              {
                sociallinks?.map((item, ind) => (
                  <img key={ind} src={item.icon} alt="social/icon" className='w-5 h-5' />
                ))
              }
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer