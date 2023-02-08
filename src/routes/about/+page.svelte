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
    let divClass = "opacity-100";

    $: if(scrollPosition > 100) {
        style = divClass
    } else {
        style = divBase
    }
    $: if(scrollPosition > 275) {
        style2 = divClass
        console.log(style)
    } else {
        style2 = divBase
    }
</script>

<h1 class="text-7xl text-white text-center font-bold">magitian</h1>

<hr class="my-4 border-spcx-400">

<div class="{style} h-sidebar transform-all duration-500 bg-blue-600 m-4 rounded-3xl p-4 text-white font-semibold">
    <h1 class="text-white text-4xl font-bold">Magical code</h1>
    <hr class="my-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur earum quos possimus officiis, quae nulla suscipit voluptate! Quo, maiores deleniti id officia praesentium at impedit vitae dolorem accusamus ipsam?</p>
</div>
<div class="{style2} h-sidebar transform-all duration-500 bg-blue-600 m-4 rounded-3xl p-4 text-white font-semibold">
    <h1 class="text-white text-4xl font-bold">Magical code</h1>
    <hr class="my-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur earum quos possimus officiis, quae nulla suscipit voluptate! Quo, maiores deleniti id officia praesentium at impedit vitae dolorem accusamus ipsam?</p>
</div>