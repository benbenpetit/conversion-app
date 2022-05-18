<script>
  import { converter } from '../../utils/converter';
  import { weight_UnitsImperial, weight_UnitsSI } from './dataWeight';
  import InputImperialWeight from './InputImperialWeight.svelte';
  import InputSIWeight from './InputSIWeight.svelte';
  import Result from '../Result.svelte';

  let options = weight_UnitsImperial;
  let result = weight_UnitsSI;
  let inputValue = 0;

  function changeSystemUnit() {
    let temp = result;
    result = options;
    options = temp;
    inputValue = 0;
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

<Result result={converter(result, inputValue, [16])} />

<style>
  .input-container {
    display: flex;
  }
</style>
