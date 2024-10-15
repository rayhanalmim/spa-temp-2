import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const HighlightSection = () => {
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
        </div>
    );
};

export default HighlightSection;