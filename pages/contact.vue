<template>
    <AppHeader />
    <div class="bg-neutral-200">
        <div class="w-full max-w-6xl mx-auto px-5 py-12">
            <h1 class="text-5xl text-center font-semibold capitalize">contact us</h1>
            <div class="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                    <h3 class="text-2xl text-center font-medium tracking-widest capitalize">Online inquirey</h3>
                    <form class="mt-8 space-y-3">
                        <input type="text" required placeholder="Name" class="w-full px-4 py-3.5 rounded-lg">
                        <input type="email" required placeholder="Email" class="w-full px-4 py-3.5 rounded-lg">
                        <input type="number" placeholder="Phone" class="w-full px-4 py-3.5 rounded-lg">
                        <select name="" id="" class="w-full px-4 py-3.5 rounded-lg">
                            <option value="" class="placeholder:text-neutral-400">Bangladesh</option>
                            <option value="">Pakistan</option>
                            <option value="">Oman</option>
                            <option value="">Qatar</option>
                        </select>
                        <textarea class="w-full rounded-lg" cols="30" rows="7"></textarea>

                        <div class="flex md:block justify-center items-center">
                            <button
                            class="w-40 bg-primary hover:bg-primary-dark transition text-white text-lg font-medium capitalize px-6 py-3.5 rounded-lg">send</button>
                        </div>
                    </form>
                </div>

                <div>
                    <h3 class="text-2xl text-center font-medium tracking-widest capitalize">contact details</h3>
                    <!-- Email -->
                    <div class="flex flex-col justify-center items-center mt-6">
                        <h4 class="text-xl capitalize font-medium">email us</h4>
                        <p class="w-60 sm:w-80 text-center mt-2">For products questions/concerns,brand information &
                            genaral inquires</p>
                        <a href="#" class="text-center underline font-semibold block">example@gmail.com</a>
                        <span class="text-center block">+125469873</span>
                        <p class="capitalize mt-2">visit our corparate website</p>
                        <a href="#" class="underline font-semibold">example.com</a>
                    </div>
                    <!-- Address -->
                    <div class="flex flex-col justify-center items-center mt-8">
                        <h4 class="text-xl capitalize font-medium">our address</h4>
                        <span class="text-neutral-500">233 North Avenue E.</span>
                        <span class="text-neutral-500">westfield, N 2586524</span>
                    </div>
                    <!-- social -->
                    <h4 class="text-xl text-center capitalize font-medium mt-8">our social</h4>
                    <div class="flex justify-center items-center gap-3 mt-1">
                        <a href="#">
                            <img src="/images/facebook.png" alt="facebook" class="w-5 h-5">
                        </a>
                        <a href="#">
                            <img src="/images/instagram.svg" alt="instagram" class="w-5 h-5">
                        </a>
                        <a href="#">
                            <img src="/images/youtube.svg" alt="youtube" class="w-6 h-6">
                        </a>
                        <a href="#">
                            <img src="/images/dribbble.svg" alt="dribbble" class="w-5 h-5">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- footer -->
    <AppFooter />
</template>