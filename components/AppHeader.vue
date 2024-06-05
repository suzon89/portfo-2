<script setup>
const navigations = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Project', href: '/project' },
    { name: 'Contact', href: '/contact' },
]

const open = ref(false)

const isActive = ref(false)

</script>

<template>
    <!-- Header -->
    <div class="w-full sticky top-0 bg-white z-30">
        <header class="w-full max-w-6xl mx-auto px-5 py-8 flex justify-between">
            <!-- Logo -->
            <a href="/" class="text-xl font-bold block">Portfo-2</a>
            <div class="hidden sm:flex items-center gap-8">
                <nav v-for="nav in navigations">
                    <a :href="nav.href" class="text-netural-900 font-bold">{{ nav.name }}</a>
                </nav>
            </div>

            <button @click="open = true" class="sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
    </div>

    <!-- Mobile menu -->
    <Transition name="fade">
        <div v-if="open" @click="open = false" class="fixed inset-0 bg-black/50 backdrop-blur">
        </div>
    </Transition>
    <Transition name="slide-fade-left">
        <div v-if="open"
            class="w-72 bg-neutral-100 shadow flex-shrink-0 h-screen overflow-y-auto flex flex-col fixed top-0 left-0 z-50 px-4 py-8">
            <!-- Close Btn -->
            <div @click="open = false" class="absolute top-4 right-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <!-- Logo -->
            <a href="/" class="text-xl font-bold block">Portfo-2</a>
            <!-- Navbar -->
            <div class="space-y-4 flex flex-col pt-4">
                <a href="/" class="text-slate-500/80 font-medium hover:text-neutral-600 transition">Home</a>
                <a href="/about" class="text-slate-500/80 font-medium hover:text-neutral-600 transition">About</a>
                <a href="/project" class="text-slate-500/80 font-medium hover:text-neutral-600 transition">Project</a>
                <a href="/contact" class="text-slate-500/80 font-medium hover:text-neutral-600 transition">Contact</a>
            </div>
            <!-- Navbar -->
        </div>
    </Transition>
    <!-- Mobilel Menu End -->
</template>
