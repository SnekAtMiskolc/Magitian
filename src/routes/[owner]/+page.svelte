<script lang="ts">
    import SideBar from '../../components/owner/SideBar.svelte';

    import Icon from 'svelte-awesome/components/Icon.svelte'

    import link from 'svelte-awesome/icons/link';
    import mapMarker from 'svelte-awesome/icons/mapMarker';

    // Icons
    import globe from 'svelte-awesome/icons/globe';
    import twitter from 'svelte-awesome/icons/twitter';
    import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
    import youtubePlay from 'svelte-awesome/icons/youtubePlay';
    import book from 'svelte-awesome/icons/book';
    import thList from 'svelte-awesome/icons/thList';
    import bookmark from 'svelte-awesome/icons/bookmark';``

    import Tab from '../../components/general/tab/Tab.svelte';
    import TabHead from '../../components/general/tab/TabHead.svelte';
    import TabHeadOption from '../../components/general/tab/TabHeadOption.svelte';
    import TabPage from '../../components/general/tab/TabPage.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

    const tab = $page.params.tab || "summary";

    let activeTabValue: number;
    onMount(() => {
        if (tab == "summary") {
            activeTabValue = 1;
        } else if (tab == "repositories") {
            activeTabValue = 2;
        } else if (tab == "lists") {
            activeTabValue = 3;
        } else {
            activeTabValue = 1;
        }
    })



    const handleClick = (tabValue: number) => () => {
        activeTabValue = tabValue;
    };
</script>

<main>
    <div class="flex flex-col md:flex-row md:justify-center">

    <div class="mx-4 mb-4 sm:w-sidebar md:mr-4 sm:mx-0 md:mt-4 md:p-4 ">
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
            <!-- Socials list -->
            <ul class="text-white">
                <li class="flex items-center">
                    <svg class="flex-shrink-0 mr-1 h-5 fill-mythic-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <span class="mr-1">Finland</span><span> Helsinki</span></li>
                <li class="flex items-center">
                    <svg class="flex-shrink-0 mr-1 h-4 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
                    <a href="https://kernel.org" class="text-blue-500 underline">https://kernel.org</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="md:w-4/5 md:mr-4 2xl:w-2/5">
        <!-- tabs -->
        <!-- If we are on mobile just remove the text and just use icons -->
        <Tab divClass="mt-4 mx-4 md:mx-0">
            <TabHead>
                <TabHeadOption id={1} on:click={handleClick(1)}>
                    <a href="/LinusTorvalds?tab=summary" class="p-3 border-b-2 border-blue-600 mr-3 lg:w-1/4">
                        <Icon data={book} scale={1.5}></Icon>
                        <span class="ml-1">Summary</span>
                    </a>
                </TabHeadOption>
                <TabHeadOption id={2} on:click={handleClick(2)}>
                    <a href="/LinusTorvalds?tab=repositories" class="p-3 border-b-0 border-spcx-600 mr-3 hover:bg-spcx-600 rounded-xl">
                        <Icon data={bookmark} scale={1.5}></Icon>
                        <span class="ml-1">Repositories</span>
                    </a>
                </TabHeadOption>
                <TabHeadOption id={3} on:click={handleClick(3)}>
                    <a href="/LinusTorvalds?tab=lists" class="p-3 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                        <Icon data={thList} scale={1.5}></Icon>
                        <span class="ml-1">Lists</span>
                    </a>
                </TabHeadOption>
                <TabHeadOption id={4} on:click={handleClick(4)}>
                    <a href="/LinusTorvalds?tab=lists" class="p-3 border-b-0 border-spcx-600 hover:bg-spcx-600 rounded-xl lg:w-1/4">
                        <Icon data={thList} scale={1.5}></Icon>
                        <span class="ml-1">Lists</span>
                    </a>
                </TabHeadOption>
            </TabHead>
            <TabPage id={1} {activeTabValue}>
                <div class="bg-spcx-900 border border-spcx-400 p-4 rounded-xl">
                    <h1>Tab 1 content</h1>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sed velit tempore repudiandae veniam nobis porro reprehenderit corporis minus voluptatibus! Iusto ratione ipsa, assumenda incidunt quas aliquid praesentium necessitatibus neque!</p>
                </div>
            </TabPage>
            <TabPage id={2} {activeTabValue}>Tab 2 content</TabPage>
            <TabPage id={3} {activeTabValue}>Tab 3 content</TabPage>
            <TabPage id={4} {activeTabValue}>Tab 3 content</TabPage>
        </Tab>
    </div>
    </div>

</main>