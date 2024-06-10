<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation, Pagination} from "swiper";
const modules = [Autoplay, Navigation, Pagination]

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    1536: {
        slidesPerView: 2,
        spaceBetween: 30
    }
}

const recentProjects = [
    { images: '/images/mobile-app-1.webp', title: 'E-commerce' },
    { images: '/images/mobile-app-2.webp', title: 'freebit' },
    { images: '/images/web-img-2.webp', title: 'UI Portofolio' },
]
</script>

<template>
    <Swiper ::autoplay="true"
        :breakpoints="breakpoints"
        :loop="true"
        :modules="modules"
        :navigation="false"
        :pagination="false"
        :slidesPerView="2"
        class="mySwiper">

        <SwiperSlide v-for="(project,index) in recentProjects"  :key="index">
            <div class="mt-10">
                <div class="w-full h-[380px] overflow-hidden rounded-3xl">
                    <img :src="project.images" alt="project-image" class="w-full h-full object-cover" />
                </div>
                <h4 class="text-2xl text-neutral-900 font-semibold mt-5">{{ project.title }}</h4>
            </div>
        </SwiperSlide>
    </Swiper>
    <div class="mt-6 sm:mt-12 flex justify-center items-center">
        <button id="swiper-pagination"></button>
    </div>
</template>
