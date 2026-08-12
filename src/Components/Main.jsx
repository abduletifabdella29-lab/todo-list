import React from 'react'
import search from '../assets/icons/search.svg'
import bottomArrow from '../assets/icons/bottomArrow.png' 
import moon from '../assets/icons/moon.svg'
import searchMan from '../assets/images/searchMan.png'
import plus from '../assets/icons/plus.png'

function Main() {
return (
    <>
    <div>
        <h1 className='font-medium text-[26px] text-center mt-5'>TODO LIST</h1>
    </div>

    <div className='w-full flex justify-center h-9.5 mt-4'>
        <div className='relative flex items-center'>
            <input 
                type="text" 
                placeholder='Search note...' 
                className='sm:w-120.75 lg:w-148.75 h-9.5 pl-3 pr-10 border-[1.4px] border-[#6C63FF] rounded-lg outline-none text-sm' 
            />
            <img 
                className='absolute right-3 w-5.25 h-5.25 pointer-events-none' 
                src={search} 
                alt="search icon" 
            />
        </div>

        <div className='relative flex ml-5'>
            <button className="bg-[#6C63FF] lg:w-21.25 w-17 rounded-lg flex items-center gap-2 lg:gap-4 px-3">
                <span className="text-white font-semibold text-[18px]">ALL</span>
                <img src={bottomArrow} className="w-4.5 h-1 object-contain" />
            </button>
        </div>

        <div>
            <button className="bg-[#6C63FF] h-9.5 rounded-lg ml-5 px-3">
                <img src={moon} className="w-5.5 h-5.5 object-contain" />
            </button>
        </div>
    </div>

    <div className='max-w-187.5 relative mx-auto'>
        <img className='w-55.25 h-43.5 mt-7.5 mx-auto' src={searchMan} />
        <h1 className='text-black font-normal text-[20px] text-center pt-5'>Empty...</h1>
    
        <button className="bg-[#6C63FF] w-12.5 h-12.5 rounded-full right-11 mt-25 absolute">
            <img className="w-6 h-6 mx-auto" src={plus} />
        </button>
    </div>
    </>
)
}

export default Main