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

    import Tab from '../../components/general/Tab.svelte';
    import TabHead from '../../components/general/TabHead.svelte';
    import TabHeadOption from '../../components/general/TabHeadOption.svelte';
    import TabPage from '../../components/general/TabPage.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

    const tab = $page.params.tab || "repositories";

    let activeTabValue: number;
    onMount(() => {
        if (tab == "summary") {
            activeTabValue = 1;
        } else if (tab == "repositories") {
            activeTabValue = 2;
        } else if (tab == "lists") {
            activeTabValue = 3;
        }
    })



    const handleClick = (tabValue: number) => () => {
        activeTabValue = tabValue;
    };
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
        <!-- If we are on mobile just remove the text and just use icons -->
        <!--div class="flex justify-evenly text-white font-bold text-center p-4 text-md overflow-x-scroll w-full">
            <a href="/LinusTorvalds" class="p-2 border-b-2 border-blue-600 mr-3 lg:w-1/4">
                <Icon data={book} scale={1.5}></Icon>
                <span class="ml-1">Summary</span>
            </a>
            <a href="/LinusTorvalds" class="p-2 border-b-0 border-spcx-600 mr-3 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                <Icon data={bookmark} scale={1.5}></Icon>
                <span class="ml-1">Repositories</span>
            </a>
            <a href="/LinusTorvalds" class="p-2 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                <Icon data={thList} scale={1.5}></Icon>
                <span class="ml-1">Lists</span>
            </a>
            <a href="/LinusTorvalds" class="p-2 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                <Icon data={thList} scale={1.5}></Icon>
                <span class="ml-1">Lists</span>
            </a>
        </div>
        <hr class="border-spcx-400"-->
    <Tab divClass="mt-4">
        <TabHead>
            <TabHeadOption id={1} on:click={handleClick(1)}>
                <a href="/LinusTorvalds?tab=summary" class="p-2 border-b-2 border-blue-600 mr-3 lg:w-1/4">
                    <Icon data={book} scale={1.5}></Icon>
                    <span class="ml-1">Summary</span>
                </a>
            </TabHeadOption>
            <TabHeadOption id={2} on:click={handleClick(2)}>
                <a href="/LinusTorvalds?tab=repositories" class="p-2 border-b-0 border-spcx-600 mr-3 hover:bg-spcx-600 rounded-xl">
                    <Icon data={bookmark} scale={1.5}></Icon>
                    <span class="ml-1">Repositories</span>
                </a>
            </TabHeadOption>
            <TabHeadOption id={3} on:click={handleClick(3)}>
                <a href="/LinusTorvalds?tab=lists" class="p-2 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                    <Icon data={thList} scale={1.5}></Icon>
                    <span class="ml-1">Lists</span>
                </a>
            </TabHeadOption>
            <TabHeadOption id={4} on:click={handleClick(4)}>
                <a href="/LinusTorvalds?tab=lists" class="p-2 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                    <Icon data={thList} scale={1.5}></Icon>
                    <span class="ml-1">Lists</span>
                </a>
            </TabHeadOption>
        </TabHead>
        <TabPage id={1} {activeTabValue}>
            <h1>Tab 1 content</h1>
        </TabPage>
        <TabPage id={2} {activeTabValue}>Tab 2 content</TabPage>
        <TabPage id={3} {activeTabValue}>Tab 3 content</TabPage>
        <TabPage id={4} {activeTabValue}>Tab 3 content</TabPage>
    </Tab>
    </div>
    </div>

</main>