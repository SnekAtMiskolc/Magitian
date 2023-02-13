<script lang="ts">
    import folder from 'svelte-awesome/icons/folder';
    import Icon from 'svelte-awesome/components/Icon.svelte'

    export let dir_name: string
</script>

<div class="bg-spcx-600 p-2 rounded-xl hover:bg-spcx-400">
    <a href="./linux/">
        <Icon data={folder}></Icon>
        {dir_name}
    </a>
</div>