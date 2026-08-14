import React, { useEffect, useState } from 'react'
import search from '../assets/icons/search.svg'
import bottomArrow from '../assets/icons/bottomArrow.png' 
import moon from '../assets/icons/moon.svg'
import searchMan from '../assets/images/searchMan.png'
import plus from '../assets/icons/plus.png'

function Main() {

    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
    });

    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState('ALL')
    
    useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);    

return (
    <>
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <div>
            <h1 className='font-medium text-[26px] text-center pt-5'>TODO LIST</h1>
        </div>

        <div className='w-full flex justify-center h-9.5 mt-4'>
            <div className='relative flex items-center'>
                <input 
                    type="search" 
                    placeholder='Search note...' 
                    className={`sm:w-95.75 lg:w-148.75 h-9.5 pl-3 pr-10 border-[1.4px] border-[#6C63FF] rounded-lg outline-none text-sm ${ darkMode
                        ? 'bg-gray-800 text-white placeholder:text-gray-300'
                        : 'bg-white text-black placeholder:text-gray-500'
                    }`} 
                />
                <img 
                    className='absolute right-3 w-5.25 h-5.25' 
                    src={search} 
                    alt="search icon" 
                />
            </div>

            <div className='relative ml-5'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#6C63FF] w-30 h-9.5 rounded-lg flex items-center justify-between px-1.5 hover:bg-[#574DDB] transition-colors duration-200"
                >
                    <h1 className="text-white font-semibold text-[18px]">
                        {filter}
                    </h1>

                    <img
                        src={bottomArrow}
                        className={`w-4.5 h-1 object-contain transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {isOpen && (
                    <div className="absolute top-10 left-0 w-30 bg-white border-2 border-[#6C63FF] rounded-lg overflow-hidden z-10">
                        <button
                            onClick={() => {
                                setFilter('ALL')
                                setIsOpen(false)
                            }}
                            className="w-full text-left px-2 py-1 text-[#6C63FF] text-[18px] hover:bg-[#c4c2f3]">
                            All
                        </button>

                        <button
                            onClick={() => {
                                setFilter('Complete')
                                setIsOpen(false)
                            }}
                            className="w-full text-left px-2 py-1 text-[#6C63FF] text-[18px] hover:bg-[#c4c2f3]">
                            Complete
                        </button>

                        <button
                            onClick={() => {
                                setFilter('Incomplete')
                                setIsOpen(false)
                            }}
                            className="w-full text-left px-2 py-1 text-[#6C63FF] text-[18px] hover:bg-[#c4c2f3]">
                            Incomplete
                        </button>
                    </div>
                )}
            </div>

            <div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-[#6C63FF] h-9.5 rounded-lg ml-5 px-3 hover:bg-[#574DDB] transition-colors duration-200">
                    <img src={moon} className="w-5.5 h-5.5 object-contain" />
                </button>
            </div>
        </div>

        <div className='max-w-187.5 relative mx-auto'>
            <img className='w-55.25 h-43.5 mt-7.5 mx-auto' src={searchMan} />
            <h1 className='font-normal text-[20px] text-center pt-5'>Empty...</h1>
        
            <button className="bg-[#6C63FF] w-12.5 h-12.5 rounded-full right-11 mt-25 absolute hover:bg-[#574DDB] transition-colors duration-200">
                <img className="w-6 h-6 mx-auto" src={plus} />
            </button>
        </div>
    </div>
    </>
)
}

export default Main