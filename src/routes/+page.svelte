<script lang="ts">
    import TimeLineCard from "../components/timeline/TimeLineCard.svelte";
    import Push from "../components/timeline/content/Push.svelte";
    import RepoChip from "../components/chips/RepoChip.svelte";
</script>
    
<main>
    <div id="recent" class="bg-spcx-700 p-4 m-4 rounded-xl border-2 border-spcx-400 sm:w-2/3">
        <h1 class="font-bold text-white text-2xl">Recent activity</h1>
        <hr class="border-spcx-400 my-2">
        <div class="grid">
            <RepoChip></RepoChip>
            <RepoChip></RepoChip>
            <RepoChip></RepoChip>
        </div>
    </div>
    <div id="timeline" class="">
        <TimeLineCard><Push></Push></TimeLineCard>
    </div>
</main>