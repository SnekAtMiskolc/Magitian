<script lang="ts">
    import { fade, slide } from 'svelte/transition';

    let a_place_for_your_code = false;

    const handleScroll = () => {
        a_place_for_your_code = window.scrollY > 3;
    };
</script>
<h1 class="text-8xl text-white">magitian</h1>
{#if a_place_for_your_code}
    <h1 in:fade>Animate on Scroll</h1>
    <p in:slide>This text is sliding in on scroll!</p>
{/if}