<script lang="ts">
	import { browser } from "$app/environment";


    export let view: boolean = false
    let state: string = 'hidden'

    $: if(view) {
        state = 'block'
    } else {
        state = 'hidden'
    }

    // If the user clicks outside the component then hide the component.
    // Also check if the environment is a browser.
    if (browser) {
        window.addEventListener("click", e => {
            if (!view) {
                return;
            }
            const target = e.target as HTMLElement;
            if (!target.closest("#menu") && target.id !== "button") {
                view = false;
            }
        });
    }
</script>

<div id="menu" class="absolute right-0 z-10 mt-2 w-auto whitespace-nowrap origin-top-right border-spcx-400 border-2 rounded-md bg-spcx-700  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none {state}" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
    <!-- Active: "bg-gray-100", Not Active: "" -->
    <span class="font-bold text-lg sm:text-md block px-4 py-2 text-white " role="menuitem" tabindex="-1" id="user-menu-item-0">👋 Hi <span class="text-blue-500">Jerry Smith</span>!</span>
    <hr class="border-spcx-400 mb-2">
    <a href="/" class="block px-4 text-sm sm:text-md py-1 hover:bg-blue-600  text-white " role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
    <a href="/" class="block px-4 text-sm sm:text-md py-1 hover:bg-blue-600  text-white " role="menuitem" tabindex="-1" id="user-menu-item-0">Your Repositories</a>
    <a href="/" class="block px-4 text-sm sm:text-md py-1 hover:bg-blue-600  text-white " role="menuitem" tabindex="-1" id="user-menu-item-0">Your Organizations</a>
    <a href="/" class="block px-4 text-sm sm:text-md py-1 hover:bg-blue-600  text-white " role="menuitem" tabindex="-1" id="user-menu-item-0">Your Supporters</a>
    <hr class="border-spcx-400 my-2">
    <a href="/" class="block px-4 py-1 text-sm sm:text-md hover:bg-blue-600  text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Deployment</a>
    <a href="/" class="block px-4 py-1 text-sm sm:text-md hover:bg-blue-600  text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
    <hr class="border-spcx-400 my-2">
    <a href="/" class="font-bold block px-4 py-1 text-sm sm:text-md hover:bg-mythic-400 hover:text-spcx-700  text-mythic-400" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
</div>