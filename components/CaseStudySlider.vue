<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const recentProjects = [
    { images: '/images/mobile-app-1.webp', title: 'E-commerce' },
    { images: '/images/mobile-app-2.webp', title: 'freebit' },
    { images: '/images/web-img-2.webp', title: 'UI Portofolio' },
]
</script>

<template>
    <Swiper :grab-cursor="true" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
        el: '#swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    }" :slides-per-view="2" :loop="true" :effect="'active'" , :breakpoints="{
        640: {
            slidePerView: 1,
        },
        1024: {
            slidePerView: 2,
            spaceBetween: 30
        }
    }" :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
    }">

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
