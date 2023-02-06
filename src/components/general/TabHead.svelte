<script>
  export let divClass = ''
  export let ulClass = 'flex flex-row'
</script>

<div class={divClass}>
    <div class="mx-4">
        <slot />
    </div>
    <hr class="border-spcx-400 my-4">
</div>