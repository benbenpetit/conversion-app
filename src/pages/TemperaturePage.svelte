<script>
  import Result from "../components/Result.svelte";
  import { fahrenheit, celsius } from "../data/dataTemperature";

  let enterUnits = fahrenheit;
  let resultUnits = celsius;
  let inputValue = 0;
  let isCToF = false;

  $: resultUnits[0].value = isCToF
    ? inputValue * (9 / 5) + 32
    : (inputValue - 32) * (5 / 9);

  function changeSystemUnit() {
    let temp = resultUnits;
    resultUnits = enterUnits;
    enterUnits = temp;
    inputValue = 0;
    isCToF = !isCToF;
  }
</script>

<h2 class="title is-3 has-text-primary">Température</h2>

<!-- Bouton pour changer le système d'unité  -->
<button class="button is-primary" on:click={changeSystemUnit}>
  {enterUnits[0].label}
  <i class="p-2 fas fa-arrow-right-long" />
  {resultUnits[0].label}
</button>

<div class="input-container">
  <input type="number" bind:value={inputValue} />
  <div class="unit-container">
    <p>{enterUnits[0].label}</p>
  </div>
</div>

<Result result={resultUnits} />

<!-- <style>
  .input-container {
    display: flex;
  }

  input {
    width: 100px;
    text-align: center;
  }

  .unit-container {
    border: 1px solid #ccc;
    padding: 0.4em;
    margin-bottom: 0.5em;
    width: 100px;
  }
</style> -->
