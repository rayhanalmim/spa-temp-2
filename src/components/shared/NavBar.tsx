"use client"
import React, { useRef, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import { HiX } from 'react-icons/hi';

interface NavBarProps {
    isScrolled: boolean; // Prop to determine the navbar color
}


const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const drawerRef = useRef<HTMLDivElement | null>(null);

    const handleDrowerMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div className='fixed top-[35px] left-0 w-full z-10 '>
            <div className={`flex justify-between px-8 py-1 transition-colors duration-300 ${isScrolled ? 'bg-[#191617]' : 'bg-transparent'}`}>
                <div className='flex gap-4'>
                    <div onClick={handleDrowerMenu} className='flex items-center'>
                        <div className="bg-black bg-opacity-50 p-2 rounded-full cursor-pointer w-12 h-12">
                            <IoMenu className='text-3xl text-white' />
                        </div>
                    </div>
                    <div className="p-2 rounded-full cursor-pointer">
                        <img className='w-20' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/mohg-nav-fan-logo-no-text.svg" alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Button variant="destructive">Book</Button>
                </div>
            </div>

            {/*Drawer Menu */}
            <div ref={drawerRef} className={`fixed top-0 left-0 h-full w-full lg:w-[800px] z-40 bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='bg-black py-5'>
                    <div className="flex justify-end p-4 ">
                        <button onClick={handleDrowerMenu}>
                            <HiX className='text-[#c7b998]' size={24} />
                        </button>

                    </div>
                    <div>
                        {/* Search Bar */}
                        <div className="flex items-center mb-4 mx-6">
                            <input
                                placeholder="Find Your Destination"
                                className="w-full py-2 px-4 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                value=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 mx-6 mt-5">
                    <section id="genericCode" className="req">
                        <div className="">
                            <div className="flex flex-col ">
                                {/* Category Filters */}
                                <div className="filter ">
                                    <ul
                                        role="tablist"
                                        aria-label="Filter by category"
                                        className="flex space-x-4 px-2 overflow-x-auto"
                                    >
                                        <li role="presentation" className="min-w-max border-b-2 border-black">
                                            <a
                                                href="#"
                                                id="all-categories"
                                                role="tab"
                                                aria-selected="true"
                                                className="text-black font-semibold"
                                            >
                                                All
                                            </a>
                                        </li>
                                        <li role="presentation" className="min-w-max">
                                            <a href="#" id="category-0" role="tab" className="text-gray-600">
                                                Middle East & Africa
                                            </a>
                                        </li>
                                        <li role="presentation" className="min-w-max">
                                            <a href="#" id="category-1" role="tab" className="text-gray-600">
                                                Asia-Pacific
                                            </a>
                                        </li>
                                        <li role="presentation" className="min-w-max">
                                            <a href="#" id="category-2" role="tab" className="text-gray-600">
                                                Europe
                                            </a>
                                        </li>
                                        <li role="presentation" className="min-w-max">
                                            <a href="#" id="category-3" role="tab" className="text-gray-600">
                                                The Americas
                                            </a>
                                        </li>
                                        <li role="presentation" className="min-w-max">
                                            <a href="#" id="category-4" role="tab" className="text-gray-600">
                                                Residences
                                            </a>
                                        </li>
                                        <li role="presentation" className="min-w-max">
                                            <a href="#" id="category-5" role="tab" className="text-gray-600">
                                                Partners
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            {/* Hotel List */}
                            <div className="list-wrapper mt-6 space-y-2  max-h-[500px] overflow-auto scrollbar-hide">
                                {[
                                    { name: 'Abu Dhabi', country: 'United Arab Emirates' },
                                    { name: 'Bangkok', country: 'Thailand' },
                                    { name: 'Bangkok', country: 'Thailand' },
                                    { name: 'Barcelona', country: 'Spain' },
                                    { name: 'Barcelona', country: 'Spain' },
                                    { name: 'Beijing - Qianmen', country: 'China' },
                                    { name: 'Beijing - Qianmen', country: 'China' },
                                    { name: 'Boston', country: 'USA' },
                                    // Add more items as needed
                                ].map((location, index) => (
                                    <a
                                        href="#"
                                        key={index}
                                        className="block p-4 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="block font-semibold">{location.name}</span>
                                        <span className="block text-sm text-gray-500">
                                            {location.country}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
