<script lang="ts">
    import Button from "../general/Button.svelte";

    import Icon from 'svelte-awesome/components/Icon.svelte'

    import pencil from 'svelte-awesome/icons/pencil';
</script>

<div class="flex justify-between my-4 md:flex-col">
    <!-- Sidebar / profile view -->
    <div class="flex md:flex-col md:justify-center md:items-center md:mb-4">
        <!-- Profile picture -->
        <div class="relative">
            <img class="rounded-full w-24 mr-2 bg-center md:w-52 bg-gradient-to-r p-1 from-mythic-500 to-blue-600" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <button class="absolute right-2 top-5 z-10 origin-top-right hidden md:block">
                <Icon data={pencil} class="bg-spcx-600 rounded-full p-2 text-white" scale={3} ></Icon>
            </button>
        </div>
        <div class="flex items-center">
            <div class="flex flex-col md:text-center md:mt-2">
                <h1 class="text-white text-2xl font-bold">Linus Torvalds</h1>
                <h2 class="text-spcx-600 font-semibold">LinusTorvalds</h2>
            </div>
        </div>
    </div>

    <div class="rounded-xl  text-white font-semibold flex justify-center items-center md:jusify-between">
        <span class="mr-3 hidden md:block text-sm">42 Follows</span>
        <span class="mr-3 hidden md:block text-sm">12000 Followers</span>
        <Button>Follow</Button>
    </div>
</div>