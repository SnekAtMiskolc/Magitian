<script lang="ts">
    import Code from "../../../components/repo/Code.svelte";
    import Tree from "../../../components/repo/Tree.svelte";
    import Blob from "../../../components/repo/Blob.svelte";
</script>

<main>
    <!-- Repo info tab -->
    <div class="bg-spcx-700 h-52 m-4 rounded-xl border-spcx-400 border p-4 text-white">
        <h1 class="font-light text-lg"><a href="./" class="text-blue-500 hover:underline">LinusTorvalds</a><span class="mx-1">/</span><a href="./Linux" class="text-blue-500 font-semibold hover:underline">Linux</a></h1>
        <hr class="border-spcx-400 my-2">
        <div class="flex">

        </div>
    </div>
    <!-- Code section -->
    <div class="bg-spcx-700 m-4 p-4 rounded-xl border-spcx-400 border text-white">
        <div>
            <a class="font-bold" href="./">Linus Torvalds</a>
            <div>
                Merged dev-x86 into master
            </div>
            <Code>
                <Tree></Tree>
                <Blob></Blob>
                <Blob></Blob>
                <Tree></Tree>
                <Tree></Tree>
                <Tree></Tree>
            </Code>
        </div>
    </div>
</main>