import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button"

const NavDrowerMenu = () => {
    return (
        <div>
            <div className="flex h-[650px] overflow-y-scroll scrollbar-hide mb-16">

                <div className='mr-6 space-y-7'>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-stay.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Stay</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                <IoIosArrowForward className='text-lg'></IoIosArrowForward>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-residences.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Residences</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-dine.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Dine</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-spa.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Spa</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-explore.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Explore</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-celebrate.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Celebrate</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-meet.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Meet</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ml-10 lg:ml-24">
                        <span className="flex justify-center items-center">
                            <img className='w-9 h-9' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/main-nav-icon-shop.svg" alt="" />
                        </span>
                        <div className='flex gap-1'>
                            <div className='flex justify-center items-center'>
                                <span className="font-semibold text-xl mt-1">Shop</span>
                            </div>
                            <div className='flex justify-center mt-1 items-center'>
                                {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">O&MO Alliance</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">Fans of M.O. Members</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">Offers</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">About Us</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">Our Celebrity Fans</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">MO Magazine</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                {/* <Button variant="outline">Contract Us</Button> */}
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">O&MO Alliance</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">MO Magazine</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 ml-10 lg:ml-24">
                            <div className="flex justify-center items-center">
                                <div className='w-9 h-9'></div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex justify-center items-center'>
                                    <span className="font-semibold mt-1">MO Magazine</span>
                                </div>
                                <div className='flex justify-center mt-1 items-center'>
                                    {/* <IoIosArrowForward className='text-lg'></IoIosArrowForward> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" hidden md:flex gap-3 lg:gap-6 opacity-100 group-hover:flex group-hover:opacity-100  transition-all duration-300">
                    <div className="flex flex-col space-y-3">
                        <div className="font-semibold text-xl">Asia-Pacific</div>
                        <ul className="space-y-3">
                            <li>
                                <a href="/en/bangkok/chao-phraya-river" target="_self">
                                    Bangkok
                                </a>
                            </li>
                            <li>
                                <a href="/en/beijing/qianmen" target="_self">
                                    Beijing - Qianmen (Now Open)
                                </a>
                            </li>
                            <li>
                                <a href="/en/beijing/wangfujing" target="_self">
                                    Beijing - Wangfujing
                                </a>
                            </li>
                            <li>
                                <a href="/en/guangzhou/tianhe" target="_self">
                                    Guangzhou
                                </a>
                            </li>
                            <li>
                                <a href="/en/hong-kong/victoria-harbour" target="_self">
                                    Hong Kong - Mandarin Oriental
                                </a>
                            </li>
                            <li>
                                <a href="/en/hong-kong/the-landmark" target="_self">
                                    Hong Kong - The Landmark
                                </a>
                            </li>
                            <li>
                                <a href="/en/jakarta/jalan-mh-thamrin" target="_self">
                                    Jakarta
                                </a>
                            </li>
                            <li>
                                <a href="/en/kuala-lumpur/petronas-towers" target="_self">
                                    Kuala Lumpur
                                </a>
                            </li>
                            <li>
                                <a href="/en/macau/one-central" target="_self">
                                    Macau
                                </a>
                            </li>
                            <li>
                                <a href="/en/sanya/dadonghai" target="_self">
                                    Sanya
                                </a>
                            </li>
                            <li>
                                <a href="/en/shanghai/pudong" target="_self">
                                    Shanghai – Pudong
                                </a>
                            </li>
                            <li>
                                <a href="/en/shenzhen/futian" target="_self">
                                    Shenzhen
                                </a>
                            </li>
                            <li>
                                <a href="/en/singapore/marina-bay" target="_self">
                                    Singapore
                                </a>
                            </li>
                            <li>
                                <a href="/en/taipei/songshan" target="_self">
                                    Taipei
                                </a>
                            </li>
                            <li>
                                <a href="/en/tokyo/nihonbashi" target="_self">
                                    Tokyo
                                </a>
                            </li>
                            <li>
                                <a href="/en/singapore/marina-bay" target="_self">
                                    Singapore
                                </a>
                            </li>
                            <li>
                                <a href="/en/taipei/songshan" target="_self">
                                    Taipei
                                </a>
                            </li>
                            <li>
                                <a href="/en/tokyo/nihonbashi" target="_self">
                                    Tokyo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col ml-8 space-y-3">
                        <div className="font-semibold text-xl">Europe</div>
                        <ul className="space-y-3 font-thin">
                            <li>
                                <a href="/en/barcelona/passeig-de-gracia" target="_self">
                                    Barcelona
                                </a>
                            </li>
                            <li>
                                <a href="/en/bodrum/paradise-bay" target="_self">
                                    Bodrum
                                </a>
                            </li>
                            <li>
                                <a href="/en/costa-navarino/messenia" target="_self">
                                    Costa Navarino
                                </a>
                            </li>
                            <li>
                                <a href="/en/geneva/rhone-river" target="_self">
                                    Geneva
                                </a>
                            </li>
                            <li>
                                <a href="/en/istanbul/bosphorus" target="_self">
                                    Istanbul
                                </a>
                            </li>
                            <li>
                                <a href="/en/lake-como/blevio" target="_self">
                                    Lake Como
                                </a>
                            </li>
                            <li>
                                <a href="/en/london/hyde-park" target="_self">
                                    London - Hyde Park
                                </a>
                            </li>
                            <li>
                                <a href="/en/london/mayfair" target="_self">
                                    London – Mayfair (Now Open)
                                </a>
                            </li>
                            <li>
                                <a href="/en/luzern/palace" target="_self">
                                    Luzern
                                </a>
                            </li>
                            <li>
                                <a href="/en/madrid/hotel-ritz" target="_self">
                                    Madrid
                                </a>
                            </li>
                            <li>
                                <a href="/en/milan/la-scala" target="_self">
                                    Milan
                                </a>
                            </li>
                            <li>
                                <a href="/en/munich/altstadt" target="_self">
                                    Munich
                                </a>
                            </li>
                            <li>
                                <a href="/en/paris/place-vendome" target="_self">
                                    Paris
                                </a>
                            </li>
                            <li>
                                <a href="/en/prague/mala-strana" target="_self">
                                    Prague
                                </a>
                            </li>
                            <li>
                                <a href="/en/zurich/savoy" target="_self">
                                    Zurich (Now Open)
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col ml-8 space-y-3">
                        <div className="font-semibold text-xl">The Americas</div>
                        <ul className="space-y-3 font-thin">
                            <li>
                                <a href="/en/barcelona/passeig-de-gracia" target="_self">
                                    Barcelona
                                </a>
                            </li>
                            <li>
                                <a href="/en/bodrum/paradise-bay" target="_self">
                                    Bodrum
                                </a>
                            </li>
                            <li>
                                <a href="/en/costa-navarino/messenia" target="_self">
                                    Costa Navarino
                                </a>
                            </li>
                            <li>
                                <a href="/en/geneva/rhone-river" target="_self">
                                    Geneva
                                </a>
                            </li>
                            <li>
                                <a href="/en/istanbul/bosphorus" target="_self">
                                    Istanbul
                                </a>
                            </li>
                            <li>
                                <a href="/en/lake-como/blevio" target="_self">
                                    Lake Como
                                </a>
                            </li>
                            <li>
                                <a href="/en/london/hyde-park" target="_self">
                                    London - Hyde Park
                                </a>
                            </li>
                            <li>
                                <a href="/en/london/mayfair" target="_self">
                                    London – Mayfair (Now Open)
                                </a>
                            </li>
                            <li>
                                <a href="/en/luzern/palace" target="_self">
                                    Luzern
                                </a>
                            </li>
                            <li>
                                <a href="/en/madrid/hotel-ritz" target="_self">
                                    Madrid
                                </a>
                            </li>
                            <li>
                                <a href="/en/milan/la-scala" target="_self">
                                    Milan
                                </a>
                            </li>
                            <li>
                                <a href="/en/munich/altstadt" target="_self">
                                    Munich
                                </a>
                            </li>
                            <li>
                                <a href="/en/paris/place-vendome" target="_self">
                                    Paris
                                </a>
                            </li>
                            <li>
                                <a href="/en/prague/mala-strana" target="_self">
                                    Prague
                                </a>
                            </li>
                            <li>
                                <a href="/en/zurich/savoy" target="_self">
                                    Zurich (Now Open)
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mr-3 ml-8 space-y-3">
                        <div className="font-semibold">Overview</div>
                        <div className="font-semibold">Our Hotels</div>
                        <div className="font-semibold">Exclusive Homes</div>
                        <div className="font-semibold">Residences</div>
                        <div className="font-semibold">O&MO Alliance</div>

                    </div>
                </div>


                {/* Add the other menu items in a similar structure */}
            </div>
        </div>
    );
};

export default NavDrowerMenu;