<script setup>

</script>

<template>
    <AppHeader />
    <div class="w-full max-w-6xl mx-auto px-10 py-8">
        <!-- Hero section -->
        <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 lg:mt-20">
            <div>
                <span class="text-2xl text-center lg:text-left text-neutral-400 font-medium block">Hey!</span>
                <!-- Title -->
                <h1 class="text-2xl sm:text-5xl text-center lg:text-left font-semibold mt-4">I’m Ariene Rey.
                    an UI/UX Designer.</h1>
                <!-- content -->
                <p class="text-md text-center lg:text-left mt-6 sm:mt-14">UX Designer based in Jakarta, Indonesia.
                    I am designing with a minimal and beautiful design in mind.</p>
                <!-- social icons -->
                <div class="flex gap-3 sm:gap-8 justify-center lg:justify-start items-center mt-8">
                    <span class="text-lg sm:text-xl">Follow me</span>
                    <div class="flex gap-8">
                        <img src="/images/instagram.svg" alt="instagram" class="w-5 h-5 sm:w-8 sm:h-8">
                        <img src="/images/youtube.svg" alt="youtube" class="w-5 h-5 sm:w-8 sm:h-8">
                        <img src="/images/dribbble.svg" alt="dribbble" class="w-5 h-5 sm:w-8 sm:h-8">
                    </div>
                </div>
                <!-- Button wrap -->
                <div class="mt-11 sm:flex justify-center gap-8">
                    <!-- Mail -->
                    <button
                        class="w-60 flex mx-auto sm:mx-0 gap-3 justify-center items-center bg-primary text-white font-bold px-7 py-4 rounded-xl hover:bg-primary-dark transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        Mail Me</button>
                    <!-- download -->
                    <button
                        class="mt-6 sm:mt-0 w-60 flex mx-auto sm:mx-0 gap-3 justify-center items-center border-2 border-primary font-bold px-7 py-4 rounded-xl hover:bg-primary-dark hover:text-white transition">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                            </svg>
                        </span>
                        Download CV</button>
                </div>
            </div>

            <div
                class="hidden md:block relative after:absolute after:content after:w-[448px] after:h-[448px] xl:after:w-full xl:after:h-full after:border after:border-netural-400 after:rounded-full after:top-0 lg:after:-top-8 after:left-20 lg:after:-left-4 after:-z-10">
                <div
                    class="w-full max-w-md xl:max-w-lg h-[448px] xl:h-[512px] rounded-full bg-rose-300  overflow-hidden flex mx-auto">
                    <img src="/images/hero-img.webp" alt="hero-img" class="w-full h-full object-contain">
                </div>
                <img src="/images/Bullet-points.png" alt="bullet-point"
                    class="absolute bottom-5 left-32 lg:-left-14 -z-10">
            </div>
        </div>

        <!-- Review section -->
        <div class="bg-neutral-100 rounded-3xl p-8 sm:p-4 lg:p-16 md:flex gap-14 mt-10">
            <div class="bg-rose-300 w-full md:w-[350px] sm:h-[458px] rounded-2xl flex-shrink-0">
                <img src="/images/hero-img.webp" alt="" class="w-full h-full object-cover  ">
            </div>
            <div class="mt-6 md:mt-0">
                <div class="sm:flex md:block lg:flex justify-center md:justify-start gap-12 items-center text-center">
                    <div>
                        <h4 class="text-4xl sm:text-7xl font-semibold">120<span class="text-green-300">+</span></h4>
                        <p class="text-neutral-300">Completed Projects</p>
                    </div>
                    <div class="flex flex-col mt-2">
                        <div class="flex justify-center !items-center gap-2">
                            <h5 class="text-3xl sm:text-5xl font-semibold">A+</h5>
                            <!-- stars -->
                            <div class="flex">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 text-yellow-500">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 text-yellow-500">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 text-yellow-500">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 text-yellow-500">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 text-yellow-500">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <p class="text-neutral-300 mt-4">Positive Review’s</p>
                    </div>
                </div>
                <!-- Title & content -->
                <div class="mt-6 lg:mt-16">
                    <h2 class="text-center md:text-left text-neutral-900 text-xl sm:text-4xl lg:text-5xl font-semibold">
                        Glad to Help You!</h2>
                    <p class="text-neutral-700 text-sm sm:text-base text-center mt-5">As a full-service digital
                        designer, I work closely with my clients
                        to define, design and develop
                        transformative user experiences across all platforms and brand’s touchpoints.</p>
                </div>
            </div>
        </div>

        <!-- Projects -->
        <div class="mt-12">
            <div class="sm:flex justify-between items-center">
                <h1 class="text-neutral-900 text-2xl sm:text-5xl text-center sm:text-left font-semibold">Recent Projects
                </h1>
                <button
                    class="bg-primary text-white hover:bg-primary-dark transition rounded-lg px-2 sm:px-9 py-1.5 sm:py-4 flex mx-auto sm:mx-0 mt-3 sm:mt-0">View
                    More</button>
            </div>
             <RecentProject />
        </div>

        <!-- Hire me -->
        <div class="mt-12">
            <h1 class="text-neutral-900 text-3xl sm:text-5xl text-center font-semibold capitalize">why hire me?</h1>
<!--             <Team />-->
        </div>

        <!-- CTA -->
        <div class="mt-12 bg-primary px-4 lg:px-20 py-8 lg:py-16 rounded-3xl sm:flex justify-between items-center">
            <h1 class="w-full sm:w-64 text-2xl md:text-5xl leading-tight text-white text-center font-semibold">
                Interested working
                with me?</h1>
            <div class="sm:flex gap-3 md:gap-12 items-center mt-3 sm:mt-0">
                <!-- Mail -->
                <button
                    class="flex mx-auto sm:mx-0 gap-3 sm:gap-1 md:gap-3 justify-center items-center bg-white font-bold px-7 sm:px-3 md:px-7 py-4 sm:py-2 md:py-4 rounded-xl sm:rounded-lg md:rounded-xl sm:text-xs md:text-base hover:bg-primary-dark hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 sm:size-4 md:size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    Mail Me</button>
                <button
                    class="flex mx-auto sm:mx-0 gap-3 items-center border-2 border-white text-white font-bold capitalize px-7 sm:px-3 md:px-7 py-4  sm:py-2 md:py-4 rounded-xl sm:rounded-lg md:rounded-xl sm:text-xs md:text-base hover:border-primary hover:bg-primary-dark transition mt-3 sm:mt-0">
                    see more project</button>
            </div>
        </div>

        <!-- Brand Logo -->
        <div class="mt-12 flex flex-wrap gap-12 justify-center items-center">
            <img src="/images/apple.png" alt="apple" class="w-14 h-14 object-cover">
            <img src="/images/jeep.png" alt="jeep" class="w-14 h-12 object-contain">
            <img src="/images/google-plus.png" alt="google-plus" class="w-14 h-14 object-cover">
            <img src="/images/check-mark.png" alt="check-mark" class="w-14 h-14 object-cover">
            <img src="/images/facebook.png" alt="facebook" class="w-14 h-14 object-cover">
            <img src="/images/github.png" alt="github" class="w-14 h-14 object-cover">
        </div>
    </div>
    <!-- Testimonial -->
    <div class="bg-rose-400 py-12">
        <div class="w-full max-w-6xl mx-auto">
            <h1 class="text-2xl sm:text-5xl text-white text-center font-semibold">We Are Loved By Users <br> And Clients
                Worldwide
            </h1>
            <!-- <testimonialSection /> -->
        </div>
    </div>
    <!-- Footer -->
    <AppFooter />

</template>