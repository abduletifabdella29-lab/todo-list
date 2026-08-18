import React, { useState } from 'react'

function NewNote({ onClose, darkMode, onApply }) {

    const [note, setNote] = useState('')

    const handleApply = () => {
        if (note.trim() === '') {
            return
        }

        onApply(note.trim())
        setNote('')
    }

    return (
        <>
            <div className='fixed inset-0 z-50 flex justify-center items-start pt-29.5'>

                <div className={`w-80 md:w-125 h-72.25 rounded-[15px] ${
                    darkMode ? 'bg-[#242424] text-white' : 'bg-white text-black'
                }`}>

                    <div>
                        <h1 className='font-medium text-2xl pt-3 text-center'>
                            NEW NOTE
                        </h1>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder='Input your note...'
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className={`pl-3 pr-10 w-66 md:w-110 h-9.5 border-[1.4px] border-[#6C63FF] rounded-lg outline-none text-sm mt-8 ml-7 ${
                                darkMode
                                    ? 'bg-[#242424] text-white placeholder:text-gray-400'
                                    : 'bg-white text-black placeholder:text-gray-400'
                            }`}
                        />
                    </div>

                    <div className='flex pt-30'>

                        <div className='ml-9 text-center pt-1 w-23 md:w-27.5 h-9.5 border-[1.4px] border-[#6C63FF] rounded-lg outline-none font-medium text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white transition-colors duration-200'>
                            <button onClick={onClose}>
                                CANCEL
                            </button>
                        </div>

                        <div className='ml-18 md:ml-55 text-center pt-1 w-23 md:w-27.5 h-9.5 border-[1.4px] border-[#6C63FF] rounded-lg outline-none font-medium bg-[#6C63FF] text-white hover:bg-white hover:text-[#6C63FF] transition-colors duration-200'>
                            <button onClick={handleApply}>
                                APPLY
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default NewNote