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
    { images: '/images/project-1.webp', title: 'Design' },
    { images: '/images/project-2.webp', title: 'google search' },
    { images: '/images/project-3.webp', title: 'UI Portofolio' }
]
</script>

<template>
    <Swiper
        :autoplay="true"
        :breakpoints="breakpoints"
        :loop="true"
        :modules="modules"
        :navigation="false"
        :pagination="false"
        :slidesPerView="2"
        class="mySwiper"
    >
        <SwiperSlide v-for="(project, index) in recentProjects" :key="index">
            <div class="mt-10">
                <div class="aspect-w-5 aspect-h-7 rounded-3xl overflow-hidden">
                    <img :src="project.images" alt="project-image" class="w-full h-full object-cover" />
                </div>
                <h4 class="text-2xl text-center sm:text-left text-neutral-900 font-semibold capitalize mt-5">{{ project.title }}</h4>
                <!-- action section -->
                <div class="mt-3 flex justify-between items-center">
                    <div class="flex gap-1 sm:gap-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 sm:size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        </span>
                        <a href="/caseStudy" class="text-sm sm:text-base capitalizey font-medium">view study case</a>
                    </div>

                    <div class="flex gap-1 sm:gap-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 sm:size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </span>
                        <a href="/caseStudy" class="text-sm sm:text-base capitalize font-medium">view preview</a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>
