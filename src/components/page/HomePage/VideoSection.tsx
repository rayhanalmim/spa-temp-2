"use client"
import { useState, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button"

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(true); // State to manage video play/pause
    const videoRef = useRef<HTMLVideoElement | null>(null); // Ref for the video element

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full h-full">
            {/* Video wrapper */}
            <div className="relative" tabIndex={-1}>
                {/* Video element */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsInline="true"
                >
                    <source
                        src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-spring-global-home-video-desktop"
                        type="video/mp4"
                    />
                    Your browser does not support this video format.
                </video>

                {/* Video controls */}
                <div className='absolute  top-4 px-10 w-full'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='flex items-center'>
                                <div
                                    className=" bg-black bg-opacity-50 p-2 rounded-full cursor-pointer w-12 h-12"

                                >
                                    {/* Play/Pause button */}
                                    <IoMenu className='text-3xl text-white'></IoMenu>
                                </div>
                            </div>
                            <div
                                className="  p-2 rounded-full cursor-pointer">
                                <img className='w-20' src="https://photos.mandarinoriental.com/is/content/MandarinOriental/_Global/Icons/Main%20Navigation/mohg-nav-fan-logo-no-text.svg" alt="" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Button variant="destructive">Book</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoSection;
