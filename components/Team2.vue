<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const teams = [
    { image: '/images/team-member-1.webp', name: 'Eleanor Pena', position: 'Eleanor Pena' },
    { image: '/images/team-member-2.webp', name: 'Jane Cooper', position: 'Front End Developer' },
    {
        image: '/images/team-member-3.webp', name: 'Cody Fisher', position: 'Back End Developer'
    },
    { image: '/images/team-member-4.webp', name: 'Corey Anderson', position: 'Full Stack Developer' },
]
</script>

<template>
    <Swiper :grab-cursor="true" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
        el: '#swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    }" :slides-per-view="3" :loop="true" :effect="'active'" , :breakpoints="{
        640: {
            slidePerView: 1,
        },
    }" :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
    }">

        <SwiperSlide v-for="(member, index) in teams" :key="index">
            <div class="mt-12 flex flex-col justify-center items-center">
                <div class="w-64 h-64 rounded-full">
                    <img :src="member.image" alt="member" class="w-full h-full object-cover rounded-full">
                </div>
                <div class="mt-6">
                    <h3 class="text-2xl text-center font-medium">{{ member.name }}</h3>
                    <p class="text-neutral-400 text-center mt-2">{{ member.position }} </p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    <div class="mt-6 sm:mt-12 flex justify-center items-center">
        <button id="swiper-pagination"></button>
    </div>
</template>