<script lang="ts">
  export let id: number;
  export let buttonClass = 'text-white'
</script>

  <button
    on:click
    class={buttonClass}
    id="{id}-tabhead"
    type="button"
    role="tab">
    <slot />
  </button>