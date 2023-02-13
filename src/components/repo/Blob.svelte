<script lang="ts">
    import Icon from 'svelte-awesome/components/Icon.svelte'
    import fileTextO from 'svelte-awesome/icons/fileTextO';
    export let filename: string
</script>

<div class="bg-spcx-600 p-2 rounded-xl hover:bg-spcx-400">
    <a href="./linux/">
        <Icon data={fileTextO}></Icon>
        {filename}
    </a>
</div>