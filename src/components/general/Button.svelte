<script lang="ts">
    export let onClick = () => {console.log('Clicked')}
</script>

<button on:click={onClick} class="p-2 bg-blue-600 w-28 h-10 hover:bg-blue-700 active:bg-blue-600 w-28 rounded-xl"><slot>Button</slot></button>