<template>
    <AppHeader />
    <div class="w-full max-w-6xl mx-auto px-5">
        <!-- case study -->
        <div class="mt-5">
            <span class="text-lg text-neutral-400 capitalize">case study</span>
            <h1 class="text-3xl sm:text-5xl text-neutral-900 font-semibold mt-2">Ant - Personal Portofolio</h1>
            <div class="mt-8 flex gap-9 border-b-2 pb-12">
                <div>
                    <h4 class="text-xl sm:text-2xl text-neutral-900 font-bold">2020</h4>
                    <span class="text-neutral-400 capitalize">year</span>
                </div>

                <div>
                    <h4 class="text-xl sm:text-2xl text-neutral-900 font-bold">Kathryn Murphy</h4>
                    <span class="text-neutral-400 capitalize">client</span>
                </div>
            </div>
            <img src="/images/portofolio.webp" alt="" class="w-full h-[660px] object-cover rounded-3xl mt-12">

            <h5 class="text-neutral-400 font-medium italic text-center mt-2">New Interface</h5>
            <h3 class="text-4xl text-neutral-900 capitalize font-bold mt-3">about project</h3>
            <p class="mt-3 text-md sm:text-lg text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
                auctor arcu, vitae, eget quis
                pellentesque vel. Facilisis enim nunc sem venenatis. Ornare ultrices tellus tempor ante tellus. Leo
                turpis proin semper eros, quis est pharetra, diam.
                Risus diam, iaculis pretium, tortor, lacus. Sed et, sit donec condimentum. Varius elit nunc facilisis
                sem pretium leo massa cras. Diam erat congue lorem vivamus vivamus dolor dictum tortor. Lacus integer
                fusce et eget eu consequat. Id eu faucibus nunc nec hendrerit rutrum. Dignissim aliquet neque vehicula
                nunc, aliquam, felis suspendisse. Tellus nunc volutpat in a consectetur sem volutpat. Purus arcu non
                lobortis sit morbi penatibus..</p>
            <img src="/images/old-interface.webp" alt="" class="w-full h-96 object-cover rounded-3xl mt-12">
            <h5 class="text-neutral-400 font-medium capitalize italic text-center mt-2">old Interface</h5>
            <h3 class="text-4xl text-neutral-900 capitalize font-bold mt-3">process</h3>
            <h4 class="text-xl sm:text-2xl text-neutral-900 font-semibold mt-2.5">Gathering Requirement</h4>
            <p class="mt-3 text-md sm:text-lg text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
                auctor arcu, vitae, eget quis
                pellentesque vel. Facilisis enim nunc sem venenatis. Ornare ultrices tellus tempor ante tellus. Leo
                turpis proin semper eros, quis est pharetra, diam.
                Risus diam, iaculis pretium, tortor, lacus. Sed et, sit donec condimentum.</p>
            <h4 class="text-2xl text-neutral-900 font-semibold mt-8">The Problem</h4>
            <p class="mt-3 text-md sm:text-lg text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo id
                auctor arcu, vitae, eget quis
                pellentesque vel. Facilisis enim nunc sem venenatis.</p>
            <img src="/images/problem.webp" alt="" class="w-full h-96 object-cover rounded-3xl mt-12">
            <h5 class="text-neutral-400 font-medium capitalize italic text-center mt-2 border-b-2 pb-12">final</h5>
        </div>

        <!-- latest case study -->
        <div class="mt-12">
            <h2 class="text-3xl sm:text-4xl text-neutral-900 font-semibold">Latest Case Study</h2>
            <CaseStudySlider />
        </div>

        <!-- footer -->
        <AppFooter />
    </div>
</template>