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
        slidesPerView: 4,
        spaceBetween: 30
    }
}
const teams = [
    { image: '/images/team-member-1.png', name: 'Communicative', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' },
    { image: '/images/team-member-2.png', name: 'Professional', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' },
    { image: '/images/team-member-3.png', name: 'Collaborative​', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' },
    { image: '/images/team-member-4.png', name: 'Client’s Favourite', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' },
    { image: '/images/team-member-5.png', name: 'Dadicate', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' }
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
        :slidesPerView="4"
        class="mySwiper">

        <SwiperSlide v-for="(member, index) in teams" :key="index">
            <div class="mt-12">
                <div class="aspect-w-3 aspect-h-4 bg-sky-200 rounded-3xl">
                    <img :src="member.image" alt="member" class="w-full h-full object-cover rounded-3xl">
                </div>
                <div class="mt-6">
                    <h3 class="text-2xl text-center font-medium">{{ member.name }}</h3>
                    <p class="text-neutral-400 text-center mt-2">{{ member.content }} </p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    <div class="mt-6 sm:mt-12 flex justify-center items-center">
        <button id="swiper-pagination"></button>
    </div>
</template>