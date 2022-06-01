<script>
  export let result;
</script>

<h2 class="title is-4 has-text-primary">Résultats :</h2>

<div class="table-container is-inline-flex">
  <table class="table is-bordered">
    <tbody>
      <tr>
        {#each result as res}
          <td>{res.value}{res.unit}</td>
        {/each}
      </tr>
    </tbody>
  </table>
</div>