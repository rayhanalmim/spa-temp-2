"use client"
import React, { useEffect, useRef, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import { HiX } from 'react-icons/hi';
import NavDrowerMenu from './NavDrowerMenu';
import Link from 'next/link';

interface NavBarProps {
    isScrolled: boolean; // Prop to determine the navbar color
}


const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const drawerRef = useRef<HTMLDivElement | null>(null);

    const handleDrowerMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <div className='fixed top-[35px] left-0 w-full z-10 '>
            <div className={`flex justify-between px-8 py-1 transition-colors duration-300 ${isScrolled ? 'bg-[#191617]  bg-opacity-60 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className='flex gap-4'>
                    <div onClick={handleDrowerMenu} className='flex items-center'>
                        <div className="bg-black bg-opacity-50 p-2 rounded-full cursor-pointer w-12 h-12">

                            {
                                isMobileMenuOpen || <IoMenu className='text-3xl text-white' />
                            }
                        </div>
                    </div>
                    <div className="p-2 rounded-full cursor-pointer z-50">
                        <img className='w-16' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/mohg-nav-fan-logo-no-text.svg" alt="" />
                    </div>
                    {
                        isScrolled && <div className="hidden md:flex items-center ml-5">
                            <ul className="flex space-x-6 text-white" role="menu">
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/stay" role="menuitem">Stay</Link>
                                </li>
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/dine" role="menuitem">Dine</Link>
                                </li>
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/spa" role="menuitem">Spa</Link>
                                </li>
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/explore" role="menuitem">Explore</Link>
                                </li>
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/celebrate" role="menuitem">Celebrate</Link>
                                </li>
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/meet" role="menuitem">Meet</Link>
                                </li>
                                <li role="presentation" className="header-navbar-item">
                                    <Link href="/en/shop" role="menuitem">Shop</Link>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
                <div className='flex justify-center z-50 items-center'>
                    <Button variant="destructive">Book</Button>
                </div>
            </div>

            {/*Drawer Menu */}
            <div ref={drawerRef} className={`fixed top-0 left-0 h-full w-full inset-0  opacity-90  z-40 bg-black text-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className=' py-5'>
                    <div className="flex justify-start ml-7 mt-5 p-4 ">
                        <button onClick={handleDrowerMenu}>
                            <HiX className='text-white]' size={24} />
                        </button>
                    </div>
                </div>
                <NavDrowerMenu></NavDrowerMenu>
            </div>
        </div>
    );
};

export default NavBar;
