<script lang="ts">
    import TimeLineCard from "../components/timeline/TimeLineCard.svelte";
    import Push from "../components/timeline/content/Push.svelte";
    import RepoChip from "../components/chips/RepoChip.svelte";
    import RecentActivity from "../components/timeline/RecentActivity.svelte";
    import Star from "../components/timeline/content/Star.svelte";
    import Accepted from "../components/timeline/content/Accepted.svelte";
</script>
    
<main>
    <div class="flex justify-center">
        <div class="w-full sm:w-4/5 md:w-2/3 lg:w-2/4 xl:w-2/4">
            <!-- Sidebar -->
            <div>
                <RecentActivity>
                    <RepoChip></RepoChip>
                    <RepoChip></RepoChip>
                    <RepoChip></RepoChip>
                    <RepoChip></RepoChip>
                    <RepoChip></RepoChip>
                    <RepoChip></RepoChip>
                </RecentActivity>
            </div>

                <h1 class="m-2 text-green-500 font-bold text-3xl text-center">Timeline</h1>
                <hr class="border-spcx-400">

            <!-- Timeline -->
            <div class="">
                <TimeLineCard><Push></Push></TimeLineCard>
                <TimeLineCard><Star></Star></TimeLineCard>
                <TimeLineCard><Accepted></Accepted></TimeLineCard>
                <TimeLineCard><Push></Push></TimeLineCard>
                <TimeLineCard><Push></Push></TimeLineCard>
                <TimeLineCard><Push></Push></TimeLineCard>
                <TimeLineCard><Push></Push></TimeLineCard>
                <TimeLineCard><Push></Push></TimeLineCard>
            </div>
        </div>

    </div>
</main>