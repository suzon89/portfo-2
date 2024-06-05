<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
const testimonials = [
  { content: 'One of the best additions to our feedback loop has been the company-wide adoption of Fellow.', img: '/images/hero-img.webp', name: 'Ronaldo Richards', post: 'UI/UX Designer',rating:'5',stars:{
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png'
  } },
  { content: 'One of the best additions to our feedback loop has been the company-wide adoption of Fellow.', img: '/images/review.webp',name:'Rachin Ravindra',post:'Web Designer',rating:'4.8',stars:{
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star-2.png'
  } },
  { content: 'One of the best additions to our feedback loop has been the company-wide adoption of Fellow.', img: '/images/hero-img.png',name:'Travis Head',post:'Web Developer',rating:'5',stars:{
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png',
    img:'/images/star.png',
  }}
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
      slidePerView: 1,
      spaceBetween: 30
    }
  }" :autoplay="{
    delay: 2000,
    disableOnInteraction: true,
  }">

    <SwiperSlide v-for="(slide,index) in testimonials" :key="index">
      <div class="w-full h-[350px] bg-white px-10 py-12 rounded-3xl rounded-r-0 mt-12 overflow-hidden">
        <p>{{ slide.content }}</p>
        <div class="flex items-center justify-between mt-11">
          <div class="flex gap-3">
            <div class="w-12 h-12 bg-primary rounded-full overflow-hidden">
              <img :src="slide.img" alt="" class="w-full h-full object-cover">
            </div>
            <div>
              <h4 class="text-neutral-900 font-semibold">{{ slide.name }}</h4>
              <h5 class="text-neutral-400 mt-1">{{ slide.post }}</h5>
            </div>
          </div>
          <!-- rating -->
          <div class="flex justify-center items-center gap-3">
            <p class="text-neutral-900 font-semibold">{{ slide.rating }}</p>
            <div v-for="(star,index) in slide.stars" :key="index" class="flex gap-1 items-center">
              <img :src="star.img" alt="star" class="w-4 h-4 object-cover">
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="mt-6 sm:mt-12 flex justify-center items-center">
    <button id="swiper-pagination"></button>
  </div>
</template>