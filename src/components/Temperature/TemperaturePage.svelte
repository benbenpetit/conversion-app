<script>
  import Result from '../Result.svelte';
  import { fahrenheit, celsius } from './dataTemperature';

  let options = fahrenheit;
  let result = celsius;
  let inputValue = 0;
  let isCToF = false;

  $: result[0].value = isCToF
    ? inputValue * (9 / 5) + 32
    : (inputValue - 32) * (5 / 9);

  function changeSystemUnit() {
    let temp = result;
    result = options;
    options = temp;
    inputValue = 0;
    isCToF = !isCToF;
  }
</script>

<h2>Température</h2>

<!-- Bouton pour change le système d'unité  -->
<button on:click={changeSystemUnit}
  >{options[0].kind} -> {result[0].kind}</button
>

<div class="input-container">
  <input type="number" bind:value={inputValue} />
  <div class="unit-container">
    <p>{options[0].label}</p>
  </div>
</div>

<Result {result} />

<style>
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
</style>
