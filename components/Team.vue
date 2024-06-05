<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
const teams = [
    { image: '/images/team-member-1.webp', name: 'Communicative', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' },
    { image: '/images/team-member-2.webp', name: '', content: '' },
    { image: '/images/team-member-3.webp', name: '', content: '' },
    { image: '/images/team-member-4.webp', name: '', content: '' },
    { image: '/images/team-member-5.webp', name: '', content: '' }
]
</script>

<template>
    <Swiper :grab-cursor="true" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
        el: '#swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    }"  :slides-per-view="4" :loop="true" :effect="'active'" , 
        :breakpoints="{
            '640': {
                slidePerView: 1,
            },
            '1024': {
                slidePerView: 4,
                spaceBetween: 30
            }
    }" :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
    }">

        <SwiperSlide v-for="(member, index) in teams" :key="index">
            <div class="mt-12">
                <div class="w-full h-80 bg-sky-200 rounded-3xl">
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