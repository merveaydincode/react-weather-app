import React, { useState } from 'react';
import Selector from './Selector';
import { FaFloppyDisk } from "react-icons/fa6";
import CountryS from './CountryS';

function Sidebar2() {
    const [isOpen, setIsOpen] = useState(false);

    const handleBackdropClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {!isOpen ? 
                (<button 
                    className='text-lg font-mono text-black fixed top-56 left-96 cursor-pointer bg-white p-2 w-36 h-10 rounded-md'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    + Şehir Ekle
                </button>
                ) : (
                <button 
                    className='text-l font-bold text-black fixed bottom-4 right-40 z-10 bg-slate-100 rounded-md p-2 w-24 h-10 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    x Cancel
                </button>
                )
            }

            {isOpen && (
                <div 
                    className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-25'
                    onClick={handleBackdropClick}
                />
            )}

            <div 
                className={`top-0 right-0 fixed bg-white w-[25vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}
            >
                
                <CountryS />
                {/* <button className='text-l font-bold text-white fixed bottom-4 right-12 z-10 bg-blue-900 rounded-md p-2 w-24 h-10 cursor-pointer'>
                <FaFloppyDisk size={17} style={{ display: 'inline-block' ,marginLeft: '1px', marginBottom: '3px'}} /> Save
                </button> */}
                
            </div>
        </>
    );
}

export default Sidebar2;
