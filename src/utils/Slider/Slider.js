import React from 'react';

// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({
    loop,
    space,
    navigation,
    clickable,
    pagination,
    module,
    breakPoint,
    classNameAdditional,
    children,
}) {
    return (
        <Swiper
            spaceBetween={space}
            loop={loop}
            navigation={navigation}
            pagination={{ clickable: clickable }}
            modules={module}
            className={`${classNameAdditional} mySwiper`}
            breakpoints={breakPoint}
        >
            {children}
        </Swiper>
    );
}
