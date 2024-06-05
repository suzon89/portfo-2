<script setup>

</script>
<template>
    <appHeader />
    <div class="w-full max-w-6xl mx-auto px-5 py-8">
        <!-- Hero section -->
        <div class="grid md:grid-cols-3 gap-12 lg:gap-24 md:mt-16">
            <div class="col-span-3 md:col-span-1 bg-rose-300 w-full lg:w-[350px] h-[458px] rounded-2xl overflow-hidden">
                <img src="/images/hero-img.webp" alt="hero-img" class="w-full h-full object-cover">
            </div>

            <div class="col-span-3 md:col-span-2">
                <h1 class="text-5xl text-center md:text-left text-neutral-900 font-bold">Ariene Rey</h1>
                <h5 class="text-lg text-center md:text-left text-neutral-700 mt-3">an UI/UX Designer.</h5>
                <p class="text-lg text-center md:text-left text-neutral-700 mt-4">UX Designer based in Jakarta,
                    Indonesia.
                    I am designing with a minimal and beautiful design in mind.</p>
                <!-- Email -->
                <div class="mt-5 flex flex-col items-center md:items-start">
                    <span class="text-lg text-neutral-700">Email me</span>
                    <a href="#" class="text-lg text-neutral-900 font-semibold">ariene.rey@gmail.com</a>
                </div>
                <img src="/images/signature.png" alt="signature" class="w-40 h-14 mt-6 flex mx-auto md:mx-0">

                <!-- tools & skills -->
                <h4 class="text-lg text-neutral-900 text-center md:text-left font-medium mt-6">Tools & Skills</h4>
                <div class="mt-3 flex gap-4 sm:gap-8 justify-center md:justify-start items-center">
                    <img src="/images/adobe-illustrator.png" alt="illustator" class="w-12 h-14 object-cover rounded-lg">
                    <img src="/images/adobe-photoshop.png" alt="" class="w-12 h-14 object-cover rounded-lg">
                    <img src="/images/Figma.png" alt="" class="w-16 h-14 object-cover rounded-lg">
                    <img src="/images/adobe-xd.png" alt="" class="w-12 h-14 object-cover rounded-lg">
                </div>
            </div>
        </div>

        <!-- Article -->
        <div class="mt-8 md:mt-24 border-t-2 border-neutral-300">
            <p class="mt-6 sm:mt-12 sm:text-lg text-neutral-700">My most recent work stint was with Sprinklr where I
                designed for
                some of its core offerings like Social Media Engagement, Social Advertising, Care support and Analytics
                for big brands with a global reach that helped integrate all their social marketing needs under one
                roof. Having led the design team for four years in this young, rapidly growing enterprise startup
                environment - taught me how to balance business goals and engineering constraints as I unrelentingly
                advocated for the user.</p>

            <div class="mt-12 bg-neutral-200 w-full h-[410px] rounded-3xl overflow-hidden flex mx-auto">
                <img src="/images/hero-img.webp" alt="" class="w-full h-full object-contain">
            </div>

            <p class="mt-12 md:text-lg text-neutral-700">I graduated from Symbiosis Institute of Design, India with a
                degree in User Experience Design. I loved
                the human-centered design methods and processes I learned in school and applied them to my thesis
                project with Microsoft R&D, Hyderabad
            </p>

            <p class="mt-12 md:text-lg text-neutral-700">I grew up in 7 different states in India and my ability to
                quickly
                adjust to new challenges in life
                comes from that. Owing to my diverse upbringing, I embrace all cultures and try to bring it to the
                designs I create. I am a movie buff and there’s nothing like relaxing to a good masala Bollywood movie.
                Food is my second love and I let my nose guide me to the pleasures of the stomach once every weekend.
            </p>

            <iframe class="w-full h-96 md:h-[660px] object-contain rounded-2xl mt-12" src="https://www.youtube.com/embed/KGUUWufvu6E?si=PwEewPZU1aG7PMWi"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <!-- Team -->
        <div class="mt-24 border-t-2 border-neutral-200">
            <h1 class="mt-12 text-5xl text-neutral-900 text-center capitalize font-semibold">Our team</h1>
            <!-- <Team2 /> -->
        </div>
    </div>

    <!-- Suggestation -->
    <div class="bg-sky-200 px-4 py-6 md:py-12">
        <div class="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-32">
            <div>
                <img src="/images/map.png" alt="map" class="w-full h-full object-cover">
            </div>

            <div>
                <h2 class="text-3xl sm:text-5xl text-white font-semibold">We’d Love To Hear From You</h2>
                <form class="mt-16">
                    <input type="text" placeholder="Enter your name" class="w-full p-4 rounded-lg">
                    <input type="email" placeholder="Enter your email" class="w-full p-4 rounded-lg mt-7">
                    <textarea name="" id="" cols="30" rows="7" class="mt-7 w-full rounded-lg"></textarea>
                    <div class="mt-7 flex justify-center md:justify-end">
                        <button
                            class="w-40 bg-primary hover:bg-primary-dark transition text-white font-bold py-4 rounded-lg">Email
                            me</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <AppFooter />
</template>