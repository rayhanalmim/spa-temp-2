"use client";
import React from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import "./highlight.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const HighlightSlide = ({currentData} : {currentData : any}) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 3 },
      breakpoints: {
        "(max-width: 768px)": {
          slides: { perView: 1 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div>
      <div className="relative  rounded-md mb-10">
        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute left-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full z-10"
          onClick={() => slider.current?.prev()}
        >
          <FaArrowLeft className="text-black" />
        </button>

        {/* Slider Section */}
        <section className="">
          <div className="container mx-auto relative">
            <div ref={sliderRef} className="keen-slider">

              {
                // Inline loop inside JSX
                Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="keen-slider__slide">
                    <div className="bg-white">
                      <article className="bg-secondary rounded-lg mx-2 p-3">
                        <div className="relative">
                          <div className="relative">
                            <img className='rounded-md h-[400px] object-cover' src="https://photos.mandarinoriental.com/is/image/MandarinOriental/qianmen-lobby-courtyard?wid=1600&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0" alt="" />
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className='flex items-center ml-1'>
                              <div>
                                <h3 className="text-xl font-semibold">Bangkok</h3>

                                <p>For more than 148 years, travellers have followed the Chao...</p>
                              </div>
                            </div>
                            <div className='flex justify-center items-center mr-2'>
                              <div className='bg-gray-800 p-3 rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaArrowRight className='text-white text-xl'></FaArrowRight>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute top-0 right-0 p-2 text-primary"
                            title="Thai Massage"
                          >
                            <i className="pbmit-base-icon-pbmit-right-arrow" />
                          </div>
                        </div>
                      </article>
                    </div>

                  </div>
                ))
              }

            </div>


          </div>
        </section>

        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute right-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full z-10"
          onClick={() => slider.current?.next()}
        >
          <FaArrowRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default HighlightSlide;
