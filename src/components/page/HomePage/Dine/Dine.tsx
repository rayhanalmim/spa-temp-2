"use client"
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import "./dine.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Dine = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 3, // Show 3 slides per page
            spacing: 20, // Optional: Adds spacing between slides
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: { perView: 1 },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });


    return (
        <div>
            <div className="px-12 flex flex-col md:flex-row gap-10">
                <div className="">
                    <h2 className="text-5xl md:text-7xl">
                        <span>Dine</span>
                    </h2>
                </div>
                <div className='flex flex-col items-center w-full md:w-2/5'>
                    <div className="">
                        <div className="text-base leading-snug text-gray-900">
                            Michelin stars, award-winning bars, and exquisite flavours.
                        </div>
                        <div className="mt-2">
                            <div className='flex gap-1'>
                                <a href="/en/stay" target="_self" className="text-[#8e6919] font-semibold hover:underline">
                                    View All Dining
                                </a>
                                <div className='flex items-center'>
                                    <IoIosArrowForward className='text-[#8e6919]'></IoIosArrowForward>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-7'>
                <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            dineData.map((item, index) => (
                                <div className="keen-slider__slide rounded">
                                    <div>
                                        <div className='relative'>
                                            <img className='w-full h-[400px] object-cover' src={item.image} alt="" />
                                        </div>
                                        <div className='space-y-2 absolute bottom-4 left-6 text-white'>
                                            <h3 className='text-lg font-semibold'>{item.subtitle}</h3>
                                            <p className='text-2xl font-semibold
                                    '>{item.title}</p>
                                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">See More</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>

    );
};

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

const dineData = [
    {
        "id": 1,
        "title": "Talea by Antonio Guida",
        "subtitle": "Abu Dhabi",
        "image": "https://photos.mandarinoriental.com/is/image/MandarinOriental/abu-dhabi-talea-banner?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        "link": "/en/abu-dhabi/emirates-palace/dine/talea-by-antonio-guida"
    },
    {
        "id": 2,
        "title": "Hakkasan",
        "subtitle": "Abu Dhabi",
        "image": "https://photos.mandarinoriental.com/is/image/MandarinOriental/abu-dhabi-hakkasan-new-banner?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        "link": "/en/abu-dhabi/emirates-palace/dine/hakkasan"
    },
    {
        "id": 3,
        "title": "Tasca by José Avillez",
        "subtitle": "Dubai",
        "image": "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-fine-dining-tasca-chef-jose?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        "description": "Discover a taste of Portugal",
        "link": "/en/dubai/jumeira-beach/dine/tasca-by-jose-avillez"
    },
    {
        "id": 4,
        "title": "Jiang by Chef Fei",
        "subtitle": "Guangzhou",
        "image": "https://photos.mandarinoriental.com/is/image/MandarinOriental/guangzhou-fine-dining-jiang-1?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        "description": "The home of Cantonese cuisine.",
        "link": "/en/guangzhou/tianhe/dine/jiang-by-chef-fei"
    },
    {
        "id": 5,
        "title": "La Mar by Gastón Acurio",
        "subtitle": "Miami",
        "image": "https://photos.mandarinoriental.com/is/image/MandarinOriental/london-restaurants-dinner-main-dining-room?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        "description": "Peruvian-inspired waterfront dining.",
        "link": "/en/miami/brickell-key/dine/la-mar-by-gaston-acurio"
    },
    {
        "id": 6,
        "title": "The Aubrey",
        "subtitle": "Hong Kong",
        "image": "https://photos.mandarinoriental.com/is/image/MandarinOriental/tokyo-tapas-motreal-wagyu-overview?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0",
        "description": "An eccentric Japanese izakaya experience.",
        "link": "/en/hong-kong/victoria-harbour/dine/the-aubrey"
    }
]


export default Dine;