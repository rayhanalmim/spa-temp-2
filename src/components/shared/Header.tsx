"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HiX } from 'react-icons/hi';
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const drawerRef = useRef<HTMLDivElement | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
    };

    // Close the drawer if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false); // Close drawer
            }
        };

        // Add event listener when the menu is open
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener when the component unmounts or the menu closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);


    return (
        <div className="bg-black text-[#ceb780] h-[35px] flex flex-col justify-center">
            <div className="px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/en" className="flex items-center">
                                    <span className="icon-home icon" />
                                    <span className="ml-1 text-sm font-semibold">Global Home</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4 text-sm font-medium">
                        <div className="border-r border-[#c7b998] pr-3 ">
                            <div className="">
                                <button onClick={toggleMobileMenu} className="flex gap-1 items-center bg-transparent border-none cursor-pointer">
                                    <span className="text-sm hidden md:flex">Our Hotels &amp; Resorts</span>
                                    <CiSearch className='font-bold text-xl'></CiSearch>
                                </button>
                            </div>
                        </div>
                        <div className='border-r border-[#c7b998] pr-3 '>
                            <div className="">
                                <a href="/en/fans-of-mo/login" itemProp="url" className="flex items-center">
                                    <span
                                        aria-label="Sign In / Join Now"
                                        className="hidden md:flex"
                                    >
                                        Sign In / Join Now
                                    </span>
                                    <FaUser className='font-bold ml-2'></FaUser>
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <button className="flex items-center">
                                    <TbWorld className='font-bold ml-1 text-lg'></TbWorld>
                                    <span className="lang-label ml-1 hidden md:flex">Languages</span>
                                    <IoIosArrowDown className='font-bold ml-1 text-lg'></IoIosArrowDown>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*Drawer Menu */}
                <div ref={drawerRef} className={`fixed top-0 right-0 h-full w-full lg:w-[800px] z-20 bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='bg-black py-5'>
                        <div className="flex justify-end p-4 ">
                            <button onClick={toggleMobileMenu}>
                                <HiX size={24} />
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
        </div>
    );
};

export default Header;