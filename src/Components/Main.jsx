import React, { useEffect, useState } from 'react'
import search from '../assets/icons/search.svg'
import bottomArrow from '../assets/icons/bottomArrow.png'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'
import searchMan from '../assets/images/searchMan.png'
import plus from '../assets/icons/plus.png'
import NewNote from './NewNote'

function Main() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState('ALL')
    const [isNewNoteOpen, setIsNewNoteOpen] = useState(false)

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes')

        if (savedNotes) {
            const parsedNotes = JSON.parse(savedNotes)

            return parsedNotes.map((note) =>
                typeof note === 'string'
                    ? { text: note, completed: false }
                    : note
            )
        }

        return []
    })

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const [editingIndex, setEditingIndex] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEdit = (index) => {
    setEditingIndex(index)
    setEditText(notes[index].text)
    }

    const handleSaveEdit = () => {
    if (editText.trim() === '') {
        return
    }

    setNotes((previousNotes) =>
        previousNotes.map((note, noteIndex) =>
            noteIndex === editingIndex
                ? {
                    ...note,
                    text: editText.trim()
                }
                : note
        )
    )

    setEditingIndex(null)
    setEditText('')
}

    const handleApplyNote = (newNote) => {
        setNotes((previousNotes) => [
            ...previousNotes,
            {
                text: newNote,
                completed: false
            }
        ])

        setIsNewNoteOpen(false)
    }

    const handleComplete = (index) => {
        setNotes((previousNotes) =>
            previousNotes.map((note, noteIndex) =>
                noteIndex === index
                    ? {
                        ...note,
                        completed: !note.completed
                    }
                    : note
            )
        )
    }

    const handleDelete = (index) => {
    setNotes((previousNotes) =>
        previousNotes.filter((_, noteIndex) => noteIndex !== index)
    )
    }

    return (
        <>
            <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>

                <div>
                    <h1 className='font-medium text-[26px] text-center pt-5'>
                        TODO LIST
                    </h1>
                </div>

                <div className='w-full flex justify-center h-9.5 mt-4'>

                    <div className='relative flex items-center'>
                        <input
                            type="search"
                            placeholder='Search note...'
                            className={`sm:w-95.75 lg:w-148.75 h-9.5 pl-3 pr-10 border-[1.4px] border-[#6C63FF] rounded-lg outline-none text-sm ${
                                darkMode
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
                            className='bg-[#6C63FF] w-30 h-9.5 rounded-lg flex items-center justify-between px-1.5 hover:bg-[#574DDB] transition-colors duration-200'
                        >
                            <h1 className='text-white font-semibold text-[18px]'>
                                {filter}
                            </h1>

                            <img
                                src={bottomArrow}
                                className={`w-4.5 h-1 object-contain transition-transform duration-200 ${
                                    isOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {isOpen && (
                            <div className='absolute top-10 left-0 w-30 bg-white border-2 border-[#6C63FF] rounded-lg overflow-hidden z-10'>

                                <button
                                    onClick={() => {
                                        setFilter('ALL')
                                        setIsOpen(false)
                                    }}
                                    className='w-full text-left px-2 py-1 text-[#6C63FF] text-[18px] hover:bg-[#c4c2f3]'
                                >
                                    All
                                </button>

                                <button
                                    onClick={() => {
                                        setFilter('Complete')
                                        setIsOpen(false)
                                    }}
                                    className='w-full text-left px-2 py-1 text-[#6C63FF] text-[18px] hover:bg-[#c4c2f3]'
                                >
                                    Complete
                                </button>

                                <button
                                    onClick={() => {
                                        setFilter('Incomplete')
                                        setIsOpen(false)
                                    }}
                                    className='w-full text-left px-2 py-1 text-[#6C63FF] text-[18px] hover:bg-[#c4c2f3]'
                                >
                                    Incomplete
                                </button>

                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => {
                                setDarkMode(!darkMode)
                            }}
                            className='bg-[#6C63FF] h-9.5 rounded-lg ml-5 px-3 hover:bg-[#574DDB] transition-colors duration-200'
                        >
                            <img
                                src={darkMode ? sun : moon}
                                className='w-5.5 h-5.5 object-contain'
                                alt={darkMode ? 'light mode' : 'dark mode'}
                            />
                        </button>
                    </div>

                </div>

                <div className='max-w-187.5 mx-auto relative min-h-105'>

                    {notes.length === 0 ? (
                        <>
                            <img
                                className='w-55.25 h-43.5 mt-7.5 mx-auto'
                                src={searchMan}
                                alt='empty'
                            />

                            <h1 className='font-normal text-[20px] text-center pt-5'>
                                Empty...
                            </h1>
                        </>
                    ) : (
                        <div className='pt-8 w-[80%] md:w-125 mx-auto flex flex-col gap-4 pb-28'>

                            {notes.map((note, index) => (
                                <div
                                    key={index}
                                    className={` shadow-sm ${
                                        darkMode
                                            ? 'text-white'
                                            : 'text-black'
                                    }`}
                                >

                                    <div className='flex items-center justify-between'>

                                        <div className='flex items-center gap-3 min-w-0'>

                                            <input
                                                type='checkbox'
                                                checked={note.completed}
                                                onChange={() => handleComplete(index)}
                                                className='w-4 h-4 accent-[#6C63FF] rounded cursor-pointer shrink-0'
                                            />

                                            {editingIndex === index ? (
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        type='text'
                                                        value={editText}
                                                        onChange={(e) => setEditText(e.target.value)}
                                                        className='border-[1.4px] border-[#6C63FF] rounded-lg px-2 py-1 outline-none'
                                                    />

                                                    <button
                                                        onClick={handleSaveEdit}
                                                        className='bg-[#6C63FF] hover:bg-[#574DDB] text-white px-3 py-1 rounded'
                                                    >
                                                        SAVE
                                                    </button>
                                                </div>
                                            ) : (
                                                <p
                                                    className={`wrap-break-word ${
                                                        note.completed
                                                            ? 'font-normal text-[16px] line-through decoration-[#6C63FF] decoration-2 px-1'
                                                            : 'font-medium text-[18px]'
                                                    }`}
                                                >
                                                    {note.text.length >= 20
                                                        ? `${note.text.slice(0, 20)}...`
                                                        : note.text}
                                                </p>
                                            )}

                                        </div>

                                        <div className='flex items-center gap-3 text-sm ml-3 shrink-0'>

                                            <button
                                                onClick={() => handleEdit(index)}
                                                className='opacity-70 hover:opacity-100'>
                                                ✏️
                                            </button>

                                            <button
                                                onClick={() => handleDelete(index)}
                                                className='opacity-70 hover:opacity-100 transition-colors duration-200'
                                            >
                                                🗑️
                                            </button>

                                        </div>

                                    </div>

                                    <div className='h-0.5 bg-[#6C63FF] mt-3 rounded-full'></div>

                                </div>
                            ))}

                        </div>
                    )}

                    <button
                        onClick={() => setIsNewNoteOpen(true)}
                        className='bg-[#6C63FF] w-12.5 h-12.5 rounded-full right-11 bottom-8 absolute hover:bg-[#574DDB] transition-colors duration-200'
                    >
                        <img
                            className='w-6 h-6 mx-auto'
                            src={plus}
                            alt='add note'
                        />
                    </button>

                </div>

            </div>

            {isNewNoteOpen && (
                <>
                    <div className='fixed inset-0 bg-black/50 z-40'></div>

                    <NewNote
                        darkMode={darkMode}
                        onClose={() => setIsNewNoteOpen(false)}
                        onApply={handleApplyNote}
                    />
                </>
            )}

        </>
    )
}

export default Main