<script lang="ts">
    export let onClick = () => {console.log('Clicked')}
</script>

<button on:click={onClick} class="p-2 w-28 h-10 w-28 rounded-xl bg-blue-600 text-sm font-bold"><slot>Button</slot></button>