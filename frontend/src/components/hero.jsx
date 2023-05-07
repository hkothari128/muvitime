import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Hero() {
    return (
        <div className="hero h-full">
          <div className="h-full w-full z-0 brightness-50 bg-[url('https://raw.githubusercontent.com/koolkishan/netflix-clone-react-node/master/netflix-ui/src/assets/home.jpg')] bg-cover"></div>
          <div className='mr-auto ml-8 z-10'>
            <img  src="https://raw.githubusercontent.com/koolkishan/netflix-clone-react-node/master/netflix-ui/src/assets/homeTitle.webp" alt="" />
            <div className='flex mt-8'>
              <div className='mr-8 btn btn-sm px-8 rounded-none btn-outline bg-slate-50 justify-center items-center'>
                <FaPlay className='mr-2' />Play
              </div>
              <div className='btn btn-sm px-8 rounded-none btn-outline bg-slate-700 opacity-70 text-white justify-center items-center'>
                <AiOutlineInfoCircle className='mr-2' />More Info
              </div>
            </div>
          </div>
        </div>
    )
}

export default Hero
