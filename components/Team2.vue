<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";
const modules = [Autoplay, Navigation, Pagination]

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30
    },
    
}

const teams = [
    { image: '/images/team-member-1.png', name: 'Eleanor Pena', position: 'Eleanor Pena' },
    { image: '/images/team-member-2.png', name: 'Jane Cooper', position: 'Front End Developer' },
    {
        image: '/images/team-member-3.png', name: 'Cody Fisher', position: 'Back End Developer'
    },
    { image: '/images/team-member-4.png', name: 'Corey Anderson', position: 'Full Stack Developer' },
]
</script>

<template>
    <Swiper :autoplay="true" :breakpoints="breakpoints" :loop="true" :modules="modules" :navigation="false"
        :pagination="false" :slidesPerView="3" class="mySwiper">

        <SwiperSlide v-for="(member, index) in teams" :key="index">
            <div class="mt-12 flex flex-col justify-center items-center">
                <div class="bg-neutral-200 w-64 h-64 rounded-full overflow-hidden">
                    <img :src="member.image" alt="member" class="w-full h-full object-cover">
                </div>
                <div class="mt-6">
                    <h3 class="text-2xl text-center font-medium">{{ member.name }}</h3>
                    <p class="text-neutral-400 text-center mt-2">{{ member.position }} </p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>