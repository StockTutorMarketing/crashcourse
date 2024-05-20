import "../App.css"
import React from 'react'
import { useEffect, useState } from 'react';
import Combine from '../components/Combine';
import BottomBar from '../components/BottomBar';
import Faq from '../components/Faq';
import Certificate from '../components/Certificate';
import Testimonials from '../components/Testimonials';
import OurCourses from '../components/OurCourses';
import WhatOffer from '../components/WhatOffer';
import Combinebottom from "../components/Combinebottom";
import Footer from "../components/Footter"

const Home = () => {
    const [showBottomBar, setShowBottomBar] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Setting the number of components to scroll past before showing the bottom bar
            const componentsToScrollPast = 1;
            const scrollPositionToTrigger = window.innerHeight * componentsToScrollPast;

            if (window.scrollY > scrollPositionToTrigger) {
                setShowBottomBar(true);
            } else {
                setShowBottomBar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Combine />
            <Combinebottom/>
            <OurCourses />
            <WhatOffer />
            <Testimonials />
            <Certificate />
            <Faq />

            {showBottomBar && (
                <div>
                    <BottomBar />
                </div>
            )}
        </>
    )
}

export default Home