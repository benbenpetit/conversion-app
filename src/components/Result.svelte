<script>
  export let result;
</script>

<h2>Résultats :</h2>

<ul>
  {#each result as res}
    <li>{res.value}{res.unit}</li>
  {/each}
</ul>

<style></style>
