<script>
  export let result;
</script>

<ul>
  {#each result as res}
    <li>{res.value}{res.unit}</li>
  {/each}
</ul>

<style></style>
