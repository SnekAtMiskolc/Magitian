<script lang="ts">
    import SideBar from '../../components/owner/SideBar.svelte';

    import Icon from 'svelte-awesome/components/Icon.svelte'

    // Icons
    import globe from 'svelte-awesome/icons/globe';
    import twitter from 'svelte-awesome/icons/twitter';
    import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
    import youtubePlay from 'svelte-awesome/icons/youtubePlay';
    import book from 'svelte-awesome/icons/book';
    import thList from 'svelte-awesome/icons/thList';
    import bookmark from 'svelte-awesome/icons/bookmark';``
</script>

<main>
    <div class="flex flex-col md:flex-row ">

    <div class="mx-4 mb-4 sm:w-sidebar sm:mx-auto md:mx-0 md:mr-4 md:w-96 md:border-r border-spcx-400 md:p-4">
        <SideBar></SideBar>
        <div class="grid space-y-3">
            <div class="bg-spcx-700 rounded-xl p-2 text-white font-semibold flex flex-row">
                <div class="border-r border-spcx-400 mr-2">
                    <h3 class="mr-1 text-sm">🐧</h3>
                </div>
                <h3 class="text-sm">Doing some programming!</h3>
            </div>
            <hr class="border-spcx-400">
            <div class="text-white font-semibold bg-spcx-700 p-2 rounded-xl">
                <h3 class="text-spcx-400">Bio</h3>
            
                <hr class="border-spcx-400 my-1">
                <p class="text-sm font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut magni qui cum est eveniet officia porro ipsa? Iusto ab, aspernatur aperiam unde quos nam?</p>
            </div>
            <!-- If the user doesn't have one of them then we shall lower it's opacity see: twitter -->
            <div class="text-white font-semibold bg-spcx-700 p-2 rounded-full flex justify-between">
                <a href="/">
                    <div class="bg-blue-600 p-2 rounded-full w-full">
                        <Icon data={globe} scale={1.52}></Icon><span class="ml-1">site</span>
                    </div>
                </a>
                <a href="/">
                    <div class="bg-blue-500 p-2 rounded-full opacity-20 cursor-not-allowed w-full">
                        <Icon data={twitter} scale={1.52}></Icon><span class="ml-1">twitter</span>
                    </div>
                </a>
                <a href="/">
                    <div class="bg-blue-800 p-2 rounded-full cursor-pointer w-full">
                        <Icon data={linkedinSquare} scale={1.52}></Icon><span class="ml-1">linkedin</span>
                    </div>
                </a>
                <a href="/" class="">
                    <div class="bg-mythic-500 p-2 rounded-full w-full">
                        <Icon data={youtubePlay} scale={1.52}></Icon><span class="ml-1">YouTube</span>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="md:w-4/5 md:mr-4">
        <!-- tabs -->
        <div class="flex  justify-evenly text-white font-bold text-center p-4 text-md">
            <a href="/LinusTorvalds" class="w-1/3 p-2 border-b-2 border-blue-600 mr-3">
                <Icon data={book} scale={1.5}></Icon>
                <span>Summary</span>
            </a>
            <a href="/LinusTorvalds" class="w-1/3 p-2 border-b-0 border-spcx-600 mr-3 hover:bg-spcx-600 rounded-xl">
                <Icon data={bookmark} scale={1}></Icon>
                <span>Repositories</span>
            </a>
            <a href="/LinusTorvalds" class="w-1/3 p-2 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl">
                <Icon data={thList} scale={1.5}></Icon>
                <span>Lists</span>
            </a>
        </div>
        <hr class="border-spcx-400">
    </div>
    </div>
</main>