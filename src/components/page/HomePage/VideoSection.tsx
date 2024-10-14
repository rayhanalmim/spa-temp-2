"use client"; // Ensure this component runs on the client

import { useState, useRef, useEffect } from 'react';
import NavBar from '@/components/shared/NavBar';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(true); // State to manage video play/pause
    const [isScrolled, setIsScrolled] = useState(false); // State to manage navbar color
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

    // Handle scroll event to change navbar color
    useEffect(() => {
        const handleScroll = () => {
            const videoSection = videoRef.current?.parentElement; // Get the parent div of the video
            if (videoSection) {
                const { top } = videoSection.getBoundingClientRect();
                setIsScrolled(top < 0); // Change navbar color when video section is out of view
            }
        };

        window.addEventListener('scroll', handleScroll); // Attach scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up on unmount
        };
    }, []);

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
                <div className='absolute top-4 z-10 px-10 w-full'>
                    <NavBar isScrolled={isScrolled} /> {/* Pass the scrolled state to NavBar */}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
