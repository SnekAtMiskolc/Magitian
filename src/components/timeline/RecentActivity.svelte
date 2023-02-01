    
<div id="recent" class="bg-spcx-700 p-4 m-4 rounded-xl border-2 border-spcx-400 ">
    <!-- Idea: Clicking the title will minimize -->
    <!-- Idea: Clicking the title will minimize on mobile and on desktop there will be a button -->
    <div class="flex justify-between justify-items-center" on:click={() => {window.alert("asd")}}>
        <h1 class="font-bold text-white text-2xl">Recent activity</h1>
    <!-- Idea: This button will minimize -->
        <button class="font-bold hover:bg-spcx-600 text-white p-2 rounded-xl">Minimize</button>
    </div>
    <hr class="border-spcx-400 my-2">
    <div class="grid">
    </div>
    <slot><h2 class="text-white font-bold text-xl">Nothing but crickets...</h2></slot>
</div>