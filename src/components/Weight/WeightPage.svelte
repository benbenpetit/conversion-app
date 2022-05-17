<script>
  import Result from '../Result.svelte';
  import { convertLengthOrWeight } from '../../service/convertLengthOrWeight';
  import { weight_UnitsImperial, weight_UnitsSI } from './dataWeight';
  import InputImperialWeight from './InputImperialWeight.svelte';
  import InputSIWeight from './InputSIWeight.svelte';

  let options = weight_UnitsImperial;
  let result = weight_UnitsSI;
  let inputValue;
  let selectedValue;

  $: if (options[0].kind == 'imperial') selectedValue = 'lb';
  else selectedValue = 'kg';

  function changeSystemUnit() {
    let temp = result;
    result = options;
    options = temp;
    inputValue = null;
    selectedValue = undefined;
  }
</script>

<h2>Poids</h2>

<!-- Bouton pour change le système d'unité  -->
<button on:click={changeSystemUnit}
  >{options[0].kind} -> {result[0].kind}</button
>

<div class="input-container">
  {#if options[0].kind == 'imperial'}
    <InputImperialWeight bind:inputValue />
  {:else}
    <InputSIWeight bind:inputValue />
  {/if}
</div>

<h2>Résultats :</h2>
<Result
  result={convertLengthOrWeight(options, result, inputValue, selectedValue)}
/>

<style>
  .input-container {
    display: flex;
  }
</style>
