<script lang="ts">
    import Button from "../general/Button.svelte";
</script>

<div class="flex justify-between my-4 md:flex-col">
    <!-- Sidebar / profile view -->
    <div class="flex md:flex-col md:justify-center md:items-center md:mb-4">
        <!-- Profile picture -->
        <img class="rounded-full w-24 mr-2 bg-center md:w-52" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div class="flex items-center">
            <div class="flex flex-col">
                <h1 class="text-white text-2xl font-bold">Linus Torvalds</h1>
                <h2 class="text-spcx-600 font-semibold">LinusTorvalds</h2>
            </div>
        </div>
    </div>

    <div class="rounded-xl  text-white font-semibold flex justify-center items-center md:jusify-between">
        <span class="mr-3 hidden md:block ">42 Follows</span>
        <span class="mr-3 hidden md:block">12000 Followers</span>
        <Button>Follow</Button>
    </div>
</div>