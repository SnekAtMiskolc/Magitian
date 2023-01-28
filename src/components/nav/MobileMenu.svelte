<script lang="ts">
    export let state = 'hidden'
</script>

<hr class="border-spcx-400">
<div class="sm:hidden {state}" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="/" class="bg-spcx-900 text-2xl text-white block px-3 py-2 rounded-md font-bold" aria-current="page">Dashboard</a>
  
        <a href="/" class="text-gray-300 text-2xl hover:bg-spcx-800 hover:text-white block px-3 py-2 rounded-md font-bold">Team</a>
  
        <a href="/" class="text-gray-300 text-2xl hover:bg-spcx-800 hover:text-white block px-3 py-2 rounded-md font-bold">Projects</a>
  
        <a href="/" class="text-gray-300 text-2xl hover:bg-spcx-800 hover:text-white block px-3 py-2 rounded-md font-bold">Calendar</a>
    </div>
</div>