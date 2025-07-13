"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import HoverCard from "../HoverCard";

const ProductSwipe = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            modules={[FreeMode]}
            className="w-full px-10 cursor-grab active:cursor-grabbing"
            grabCursor={true}
        >
            {[
                { title: "Product 1", description: "Gentle & nourishing" },
                { title: "Product 2", description: "For every look" },
                { title: "Product 3", description: "Save more, get more" },
                { title: "Product 4", description: "Long-lasting scents" },
                { title: "Product 5", description: "Hydrate & glow" },
                { title: "Product 6", description: "Smooth Operator" },
            ].map((item, index) => (
                <SwiperSlide key={index} className="!w-auto">
                    <HoverCard title={item.title} description={item.description} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSwipe;