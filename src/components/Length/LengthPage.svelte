<script>
  import InputImperialLength from './InputImperialLength.svelte';
  import { converter } from '../../utils/converter';
  import { length_UnitsImperial, length_UnitsSI } from './dataLength';
  import InputSILength from './InputSILength.svelte';
  import Result from '../Result.svelte';

  let options = length_UnitsImperial;
  let result = length_UnitsSI;
  let inputValue = 0;

  function changeSystemUnit() {
    let temp = result;
    result = options;
    options = temp;
    inputValue = 0;
  }
</script>

<h2>Longueur</h2>

<!-- Bouton pour change le système d'unité  -->
<button on:click={changeSystemUnit}
  >{options[0].kind} -> {result[0].kind}</button
>

<div class="input-container">
  {#if options[0].kind == 'imperial'}
    <InputImperialLength bind:inputValue />
  {:else}
    <InputSILength bind:inputValue />
  {/if}
</div>

<Result result={converter(result, inputValue, [1760, 3, 12])} />

<style>
  .input-container {
    display: flex;
  }
</style>
