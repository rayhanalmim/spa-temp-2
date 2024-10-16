"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import HighlightSlide from './HighlightSlide';

const HighlightSection = () => {

    const [activeMenu, setActiveMenu] = useState<number>(1); // State to track active menu

    const handleMenuClick = (id: number) => {
        setActiveMenu(id);
    };

    // Find the slides for the active menu
    const currentSlides = menuItem.find(item => item.id === activeMenu)?.slides || [];
    console.log(currentSlides);

    return (
        <div className='pt-10 pb-4'>
            <div className="px-12 flex flex-col md:flex-row gap-10">
                <div className="">
                    <h2 className="text-5xl md:text-7xl">
                        <span>Stay</span>
                    </h2>
                </div>
                <div className='flex flex-col items-center w-full md:w-2/5'>
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
            <div className='px-2 md:px-4 pt-10 pb-4'>
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
                                className={`min-w-max ${activeMenu === item.id ? 'border-b-2 border-black cursor-pointer' : 'cursor-pointer'
                                    }`}
                            >
                                <div
                                    id={item.id.toString()}
                                    role="tab"
                                    aria-selected={activeMenu === item.id}
                                    className={`font-semibold ${activeMenu === item.id ? 'text-black' : 'text-gray-600'
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
            <div>
                <HighlightSlide currentData={currentSlides}></HighlightSlide>
            </div>
        </div>
    );
};

const menuItem = [
    {
        id: 1,
        label: "Spotlight",
        slides: [
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/downtown-dubai-exterior-view?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Maldives Escape",
                description: "Escape to a private island and enjoy crystal clear waters."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/doha-hotel-exterior-04?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Alps Adventure",
                description: "Ski the world's most famous slopes and enjoy après-ski delights."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/epauh-exterior-night-view?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Rome Visit",
                description: "Discover ancient landmarks and explore Italian art and cuisine."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/lake-como-hotel-exterior-02?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Kenya Safari",
                description: "Experience the thrill of African wildlife in the heart of Kenya."
            }
        ]
    },
    {
        id: 2,
        label: "Asia-Pacific",
        slides: [
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/istanbul-exterior-01-v3?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Tokyo Lights",
                description: "Explore the vibrant streets and cutting-edge technology of Tokyo."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/geneva-13-exterior-view?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Sydney View",
                description: "Enjoy the iconic views of the Opera House and Harbour Bridge."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/costa-navarino-rendering-hotel-villas-exterior?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Bali Beach",
                description: "Relax on pristine beaches and enjoy Bali’s unique culture."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/bodrum-hotel-blue-beach-aerial-2?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Singapore Tour",
                description: "Discover the modern architecture and cultural diversity of Singapore."
            }
        ]
    },
    {
        id: 3,
        label: "The Americas",
        slides: [
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/barcelona-2014-exterior?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "New York",
                description: "Experience the bustling city life and iconic landmarks of NYC."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/santiago-building-01?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Amazon Jungle",
                description: "Explore the untouched wilderness and biodiversity of the Amazon."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/miami-exterior-via-bridge?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Caribbean",
                description: "Relax on the sandy beaches and crystal-clear waters of the Caribbean."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/canouan-hotel-exterior-aerial-01?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Patagonia",
                description: "Discover the stunning landscapes and outdoor adventures in Patagonia."
            }
        ]
    },
    {
        id: 4,
        label: "Europe",
        slides: [
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/boston-lobby-fireplace?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Paris",
                description: "Enjoy romantic views and iconic sights in the heart of Paris."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/landmark-2015-hotel-exterior-view?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "London",
                description: "Explore historic landmarks and modern attractions in London."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/guangzhou-exterior-dusk?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Swiss Alps",
                description: "Ski and hike the breathtaking mountains of Switzerland."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/wangfujing-hotel-terrace-views-dusk?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Greek Isles",
                description: "Relax on the stunning islands and explore ancient ruins in Greece."
            }
        ]
    },
    {
        id: 5,
        label: "Middle East & Africa",
        slides: [
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-fine-dining-tasca-chef-jose?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Dubai",
                description: "Discover luxury shopping, modern architecture, and vibrant nightlife."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/abu-dhabi-hakkasan-new-banner?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Cape Town",
                description: "Explore the rich culture and stunning landscapes of Cape Town."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/abu-dhabi-talea-banner?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Sahara",
                description: "Experience the vast beauty and unique culture of the Sahara Desert."
            },
            {
                image: "https://photos.mandarinoriental.com/is/image/MandarinOriental/riyadh-exterior-april-2022?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
                title: "Zanzibar",
                description: "Relax on beautiful beaches and immerse yourself in local culture."
            }
        ]
    }
];


export default HighlightSection;