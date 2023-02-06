<script lang="ts">
  export let activeTabValue: number;
  export let id: number;
  export let contentDivClass = 'p-4 bg-spcx-900 rounded-lg border border-spcx-400 text-white';
</script>

{#if activeTabValue === id}
  <div class={contentDivClass} id="{id}-tabitem" role="tabpanel" aria-labelledby="{id}-tab">
    <slot />
  </div>
{/if}