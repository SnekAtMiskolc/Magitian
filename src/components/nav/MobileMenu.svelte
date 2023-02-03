<script lang="ts">
    export let state = 'hidden'
</script>

<hr class="border-spcx-400">
<div class="sm:hidden {state}" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
        <input type="text" name="" id="" class="bg-spcx-800 p-2 mb-2 text-lg w-full rounded text-white font-semibold" placeholder="Search for something...">
        <hr class="border-spcx-400 py-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="/" class="bg-spcx-900 text-lg text-white block px-3 py-2 rounded-md font-bold " aria-current="page">Dashboard</a>
  
        <a href="/" class="text-gray-300 text-lg hover:bg-spcx-800 hover:text-white block px-3 py-2 rounded-md font-bold">Team</a>
  
        <a href="/" class="text-gray-300 text-lg hover:bg-spcx-800 hover:text-white block px-3 py-2 rounded-md font-bold">Projects</a>
  
        <a href="/" class="text-gray-300 text-lg hover:bg-spcx-800 hover:text-white block px-3 py-2 rounded-md font-bold">Calendar</a>
    </div>
</div>