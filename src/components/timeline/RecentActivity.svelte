<script lang="ts">
    import Icon from 'svelte-awesome/components/Icon.svelte'

    import chevronUp from 'svelte-awesome/icons/chevronUp';
    import chevronDown from 'svelte-awesome/icons/chevronDown';

    let down = true
    let state: string = 'block'

    $: if(down) {
        state = 'block'
    } else {
        state = 'hidden'
    }

    const toggleDown = () => {
        down = !down
    }
</script>

<div id="recent" class="bg-spcx-700 m-4 rounded-xl border-2 border-spcx-400 ">
    <!-- Idea: Clicking the title will minimize -->
    <!-- Idea: Clicking the title will minimize on mobile and on desktop there will be a button -->
    <div class="flex justify-between justify-items-center hover:bg-spcx-600 p-4 rounded-t-xl" on:click={toggleDown} on:keydown>
        <h1 class="font-bold text-white text-xl">Recent activity</h1>
    <!-- Idea: This button will minimize -->
    {#if down}
        <Icon data={chevronUp} style="color: #FFFFFF"></Icon>
    {:else}
        <Icon data={chevronDown} style="color: #FFFFFF"></Icon>
    {/if}
    </div>
    <hr class="border-spcx-400 mb-2">
    <div class="grid {state}">
        <slot><h2 class="text-white font-bold text-lg">Nothing but crickets...</h2></slot>
    </div>
</div>