<script lang="ts">
	import { browser } from '$app/environment';
    import { fade, slide } from 'svelte/transition';

      let scrollPosition = 0;

    if (browser) {

        window.addEventListener("scroll", () => {
            scrollPosition = window.scrollY;
        });
    }

    let divBase = "opacity-0"
    let style = divBase;
    let style2 = divBase;
    let style3 = divBase;
    let style4 = divBase;
    let divClass = "opacity-100";

    $: if(scrollPosition > 100) {
        style = divClass
    }
    $: if(scrollPosition > 275) {
        style2 = divClass
    }
    $: if(scrollPosition > 700) {
        style3 = divClass
    }
    $: if(scrollPosition > 1700) {
        style4 = divClass
    }
</script>

<h1 class="text-7xl text-white text-center font-bold">magitian</h1>

<hr class="my-4 border-spcx-400">

<div class="{style} h-sidebar transform-all duration-500 m-4 rounded-3xl p-4 bg-gradient-to-tl from-blue-600 to-mythic-500 text-white font-semibold">
    <h1 class="text-white text-4xl font-bold">Magical code</h1>
    <hr class="my-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur earum quos possimus officiis, quae nulla suscipit voluptate! Quo, maiores deleniti id officia praesentium at impedit vitae dolorem accusamus ipsam?</p>
</div>
<div class="{style2} h-sidebar transform-all duration-500 m-4 rounded-3xl p-4 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white font-semibold">
    <h1 class="text-white text-4xl font-bold">Magical code</h1>
    <hr class="my-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur earum quos possimus officiis, quae nulla suscipit voluptate! Quo, maiores deleniti id officia praesentium at impedit vitae dolorem accusamus ipsam?</p>
</div>
<div class="{style3} h-sidebar transform-all duration-500 m-4 rounded-3xl p-4 bg-gradient-to-b from-teal-700 via-teal-500 to-blue-500 text-white font-semibold">
    <h1 class="text-white text-4xl font-bold">Magical code</h1>
    <hr class="my-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur earum quos possimus officiis, quae nulla suscipit voluptate! Quo, maiores deleniti id officia praesentium at impedit vitae dolorem accusamus ipsam?</p>
</div>
<div class="{style4} h-sidebar transform-all duration-500 m-4 rounded-3xl p-4 bg-gradient-to-br from-yellow-600 to-lime-500 text-white font-semibold">
    <h1 class="text-white text-4xl font-bold">Magical code</h1>
    <hr class="my-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur earum quos possimus officiis, quae nulla suscipit voluptate! Quo, maiores deleniti id officia praesentium at impedit vitae dolorem accusamus ipsam?</p>
</div>