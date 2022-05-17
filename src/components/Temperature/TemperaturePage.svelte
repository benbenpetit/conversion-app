<script>
  import Result from '../Result.svelte';
  import { fahrenheit, celsius } from './dataTemperature';
  import { convertTemperature } from '../../service/convertTemperature';

  let options = fahrenheit;
  let result = celsius;
  let inputValue = 0;
  let selectedValue = options[0].unit;

  function changeSystemUnit() {
    let temp = result;
    result = options;
    options = temp;
    inputValue = 0;
    selectedValue = options[0].unit;
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

<h2>Résultats :</h2>
<Result
  result={convertTemperature(options, result, inputValue, selectedValue)}
/>

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
