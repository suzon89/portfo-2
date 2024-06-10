<script setup>
const webDesign = [
    { images: '/images/web-img-1.webp', name: 'minify-web design' },
    { images: '/images/web-img-2.webp', name: 'Ant - Personal Portofolio' },
    { images: '/images/web-img-3.webp', name: 'Lumy - Dashboard UI Kit' },
    { images: '/images/web-img-4.webp', name: 'Keeper - Soccer Site' }
]

const mobileApp = [
    { images: '/images/mobile-app-1.webp', name: 'E-commerce mobile app' },
    { images: '/images/mobile-app-2.webp', name: 'FreeFit mobile app' },
    { images: '/images/mobile-app-3.webp', name: 'travel mobile app' },
    { images: '/images/mobile-app-4.webp', name: 'translate mobile app' },
]

const freeBies = [
    { images: '/images/freebies-1.webp', name: 'green infographic' },
    { images: '/images/freebies-2.webp', name: 'catagory' },
    { images: '/images/freebies-3.webp', name: 'free items' },
    { images: '/images/freebies-4.webp', name: 'giveaway' },
]
const step = ref(1)

function nextStep(stp) {
    step.value = stp
}
</script>

<template>
    <AppHeader />
    <div class="w-full max-w-6xl mx-auto px-5 py-8">
        <!-- project -->
        <div class="mt-4">
            <h1 class="text-3xl sm:text-5xl text-neutral-900 font-semibold">Our Projects</h1>

            <div class="flex flex-wrap gap-3 md:gap-20 items-center mt-10">
                <button @click="nextStep(1)" :class="{ 'text-primary': step === 1 }"
                    class="text-sm sm:text-base text-neutral-400 capitalize font-semibold">web design</button>
                <button @click="nextStep(2)" :class="{ 'text-primary': step === 2 }"
                    class="text-sm sm:text-base text-neutral-400 capitalize font-semibold">mobile app</button>
                <button @click="nextStep(3)" :class="{ 'text-primary': step === 3 }"
                    class="text-sm sm:text-base text-neutral-400 capitalize font-semibold">freebies</button>
            </div>

            <div class="mt-12">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- web Design -->
                    <div v-if="step === 1" v-for="(web, index) in webDesign" :key="index">
                        <div class="w-full h-96 overflow-hidden">
                            <img :src="web.images" alt="" class="w-full h-full object-cover rounded-3xl">
                        </div>
                        <div class="mt-8">
                            <h3
                                class="text-xl sm:text-2xl text-neutral-800 capitalize font-semibold hover:text-primary transition cursor-pointer">
                                {{ web.name }}</h3>
                            <!-- action section -->
                            <div class="mt-3 flex gap-3 sm:justify-between items-center">
                                <div class="flex gap-1 sm:gap-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <a href="/caseStudy"
                                        class="text-sm sm:text-base capitalize hover:text-neutral-700 transition font-medium">view
                                        study
                                        case</a>
                                </div>

                                <div class="flex gap-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </span>
                                    <a href="#" class="text-sm sm:text-base capitalize font-medium">view preview</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- mobile application -->
                    <div v-if="step === 2" v-for="(app, index) in mobileApp" :key="index">
                        <div class="w-full h-96">
                            <img :src="app.images" alt="" class="w-full h-full object-cover rounded-3xl">
                        </div>
                        <div class="mt-8">
                            <h3 class="text-2xl text-neutral-800 capitalize font-semibold">{{ app.name }}</h3>
                            <!-- action section -->
                            <div class="mt-3 flex justify-between items-center">
                                <div class="flex gap-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <a href="/caseStudy" class="text-sm sm:text-base capitalizey font-medium">view study
                                        case</a>
                                </div>

                                <div class="flex gap-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </span>
                                    <a href="#" class="text-sm sm:text-base capitalize font-medium">view preview</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- freebies -->
                    <div v-if="step === 3" v-for="(bies, index) in freeBies" :key="index">
                        <div class="w-full h-96">
                            <img :src="bies.images" alt="" class="w-full h-full object-cover rounded-3xl">
                        </div>
                        <div class="mt-8">
                            <h3 class="text-2xl text-neutral-800 capitalize font-semibold">{{ bies.name }}</h3>
                            <!-- action section -->
                            <div class="mt-3 flex justify-between items-center">
                                <div class="flex gap-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <a href="caseStudy" class="text-sm sm:text-base capitalizey font-medium">view study
                                        case</a>
                                </div>

                                <div class="flex gap-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </span>
                                    <a href="#" class="text-sm sm:text-base capitalize font-medium">view preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="mt-12 bg-primary px-4 lg:px-20 py-8 sm:py-16 rounded-3xl sm:flex justify-between items-center">
            <h1
                class="w-full max-w-[300px] sm:max-w-[458px] text-3xl md:text-5xl md:leading-tight text-white font-semibold">
                Interested working
                with me?</h1>
            <div class="flex gap-12 items-center mt-3 sm:mt-0">
                <!-- Mail -->
                <button
                    class="flex gap-3 items-center bg-white font-bold px-7 py-4 rounded-xl hover:bg-primary-dark hover:text-white transition">

                    Mail Me</button>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <AppFooter />
</template>