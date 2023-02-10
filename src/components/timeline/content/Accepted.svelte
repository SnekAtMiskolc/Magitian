<script lang="ts">
    import Commit from "../../chips/Commit.svelte";
</script>

<div class="text-white">
    <div class="flex place-items-center">
        <img class="rounded-full w-7 h-7 mr-1 bg-center" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <h1 class="font-bold ">
            <a href="/LinusTorvalds" class="text-blue-500">Linus Torvalds</a> has accepted you pull request in <a href="/LinusTorvalds/linux" class="text-mythic-400">linux</a>
        </h1>
    </div>
    <hr class="border-spcx-400 my-2">
    <div>
        <h2 class="font-bold">Merged 5 commits</h2>
        <div class="grid mt-2">
            <Commit commit_id="52fm435"></Commit>
            <Commit commit_id="7fjk342"></Commit>
            <Commit commit_id="1g52ht5"></Commit>
            <Commit commit_id="7ff4277"></Commit>
            <Commit commit_id="mf305ll"></Commit>
        </div>
    </div>
</div>