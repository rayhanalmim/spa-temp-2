"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const HighlightSection = () => {

    const [activeMenu, setActiveMenu] = useState<string>('all-categories'); // State to track active menu

    const handleMenuClick = (id: string) => {
        setActiveMenu(id);
    };

    return (
        <div className='py-10'>
            <div className="px-12 flex gap-10">
                <div className="">
                    <h2 className="text-7xl">
                        <span>Stay</span>
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row items-center w-2/5'>
                    <div className="">
                        <div className="text-base leading-snug text-gray-900">
                            Discover contemporary luxury with signature oriental charm in our meticulously designed hotels and resorts.
                        </div>
                        <div className="mt-2">
                            <div className='flex gap-1'>
                                <a href="/en/stay" target="_self" className="text-[#8e6919] font-semibold hover:underline">
                                    View All Stays
                                </a>
                                <div className='flex items-center'>
                                    <IoIosArrowForward className='text-[#8e6919]'></IoIosArrowForward>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-12 pt-10 pb-4'>
            <div className="filter">
            <ul
                role="tablist"
                aria-label="Filter by category"
                className="flex space-x-2 md:space-x-5 lg:space-x-6 px-2 overflow-x-auto"
            >
                {menuItem.map((item) => (
                    <div
                        key={item.id}
                        role="presentation"
                        className={`min-w-max ${
                            activeMenu === item.id ? 'border-b-2 border-black cursor-pointer' : 'cursor-pointer'
                        }`}
                    >
                        <div
                            id={item.id}
                            role="tab"
                            aria-selected={activeMenu === item.id}
                            className={`font-semibold ${
                                activeMenu === item.id ? 'text-black' : 'text-gray-600'
                            }`}
                            onClick={() => handleMenuClick(item.id)} // Set active menu on click
                        >
                            {item.label}
                        </div>
                    </div>
                ))}
            </ul>
        </div>
            </div>
        </div>
    );
};

const menuItem = [
    {
      "id": "all-categories",
      "label": "Spotlight"
    },
    {
      "id": "category-0",
      "label": "Asia-Pacific"
    },
    {
      "id": "category-1",
      "label": "The Americas"
    },
    {
      "id": "category-2",
      "label": "Europe"
    },
    {
      "id": "category-3",
      "label": "Middle East & Africa"
    }
  ]
  

export default HighlightSection;