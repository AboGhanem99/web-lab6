// Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideProps {
    children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => (
    <div className="px-4">
        {children}
    </div>
);

const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto my-12">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Slider</h2>
            <Slider {...settings} className="mx-auto max-w-xl">
                <Slide>
                    <h3 className="text-2xl font-bold mb-2">Slide 1</h3>
                    <p className="text-gray-700">Content for slide 1</p>
                </Slide>
                <Slide>
                    <h3 className="text-2xl font-bold mb-2">Slide 2</h3>
                    <p className="text-gray-700">Content for slide 2</p>
                </Slide>
                <Slide >
                    <h3 className="text-2xl font-bold mb-2">Slide 3</h3>
                    <p className="text-gray-700">Content for slide 3</p>
                </Slide>
            </Slider>
        </div>
    );
};

export default MySlider;
