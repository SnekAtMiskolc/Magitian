<script lang="ts">
    import Button from "./Button.svelte";

    let show = false;

    const toggle = () => {
        show = !show
    }
</script>

<div class="text-white">
    <Button onClick={toggle}>Dialog</Button>
</div>

{#if show}
{/if}