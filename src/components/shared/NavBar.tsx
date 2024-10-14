"use client"
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { Button } from "@/components/ui/button";

interface NavBarProps {
    isScrolled: boolean; // Prop to determine the navbar color
}

const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {
    return (
        <div className='fixed top-[35px] left-0 w-full z-10 '>
            <div className={`flex justify-between px-8 py-1 transition-colors duration-300 ${isScrolled ? 'bg-[#191617]' : 'bg-transparent'}`}>
                <div className='flex gap-4'>
                    <div className='flex items-center'>
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
        </div>
    );
};

export default NavBar;
