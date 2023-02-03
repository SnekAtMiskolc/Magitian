<script lang="ts">
    import SideBar from '../../components/owner/SideBar.svelte';

    import Icon from 'svelte-awesome/components/Icon.svelte'

    import globe from 'svelte-awesome/icons/globe';
    import twitter from 'svelte-awesome/icons/twitter';
    import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
    import youtubePlay from 'svelte-awesome/icons/youtubePlay';
    import book from 'svelte-awesome/icons/book';
    import thList from 'svelte-awesome/icons/thList';
    import bookmark from 'svelte-awesome/icons/bookmark';``

    import chevronUp from 'svelte-awesome/icons/chevronUp';
    import chevronDown from 'svelte-awesome/icons/chevronDown';

</script>

<main>
    <SideBar></SideBar>
    <div class="mx-4 mb-4">
        <div class="grid space-y-3">
            <div class="bg-spcx-700 rounded-xl  text-white font-semibold flex">
                <h1 class="p-2 bg-mythic-400 rounded-l-xl w-26 text-center">21 Follows</h1>
                <h1 class="p-2 bg-green-600 border-spcx-900 border-l-4 flex-grow text-center">124000 Followers</h1>
                <button class="border-l-4 border-spcx-900 p-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 w-28 rounded-r-xl">Follow</button>
            </div>
            <div class="bg-spcx-700 rounded-xl p-2 text-white font-semibold flex flex-row">
                <div class="border-r border-spcx-400 mr-2">
                    <h3 class="mr-1">🐧</h3>
                </div>
                <h3>Doing some programming!</h3>
            </div>
            <div class="text-white font-semibold bg-spcx-700 p-2 rounded-xl">
                <h3 class="text-spcx-400">Bio</h3>
            
                <hr class="border-spcx-400 my-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut magni qui cum est eveniet officia porro ipsa? Iusto ab, aspernatur aperiam unde quos nam?</p>
            </div>
            <!-- If the user doesn't have one of them then we shall lower it's opacity see: twitter -->
            <div class="text-white font-semibold bg-spcx-700 p-2 rounded-full flex justify-between">
                <a href="/">
                    <div class="bg-blue-600 p-2 rounded-full">
                        <Icon data={globe} scale={1.52}></Icon><span class="ml-1">site</span>
                    </div>
                </a>
                <a href="/">
                    <div class="bg-blue-500 p-2 rounded-full opacity-20 cursor-not-allowed">
                        <Icon data={twitter} scale={1.52}></Icon><span class="ml-1">twitter</span>
                    </div>
                </a>
                <a href="/">
                    <div class="bg-blue-800 p-2 rounded-full cursor-pointer">
                        <Icon data={linkedinSquare} scale={1.52}></Icon><span class="ml-1">linkedin</span>
                    </div>
                </a>
                <a href="/">
                    <div class="bg-mythic-500 p-2 rounded-full">
                        <Icon data={youtubePlay} scale={1.52}></Icon><span class="ml-1">YouTube</span>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <hr class="border-spcx-400">

    <!-- tabs -->
    <div class="flex  justify-evenly text-white font-bold text-center p-2 text-md">
        <a href="/LinusTorvalds" class="w-1/3 p-2 border-b-2 border-blue-600 mr-3">
            <Icon data={book} scale={1.5}></Icon>
            <span>Summary</span>
        </a>
        <a href="/LinusTorvalds" class="w-1/3 p-2 border-b-2 border-spcx-600 mr-3">
            <Icon data={bookmark} scale={1.4}></Icon>
            <span>Repositories</span>
        </a>
        <a href="/LinusTorvalds" class="w-1/3 p-2 border-b-2 border-spcx-600">
            <Icon data={thList} scale={1.5}></Icon>
            <span>Lists</span>
        </a>
    </div>
    <!-- Profile stats -->
    <div class="w-1/2 pt-8 p-4">

    </div>
</main>