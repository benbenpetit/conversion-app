<script>
  import InputImperialLength from '../components/Length/InputImperialLength.svelte';
  import InputSILength from '../components/Length/InputSILength.svelte';
  import InputImperialWeight from '../components/Weight/InputImperialWeight.svelte';
  import InputSIWeight from '../components/Length/InputSILength.svelte';
  import { length_UnitsImperial, length_UnitsSI } from '../data/dataLength';
  import { weight_UnitsImperial, weight_UnitsSI } from '../data/dataWeight';
  import { converter } from '../utils/converter';
  import Result from '../components/Result.svelte';

  export let whatConversion;
  export let factorConversionList;

  let enterUnits = imperialResolver(whatConversion);
  let resultUnits = siResolver(whatConversion);
  let inputValue = 0;
  let isImperialUnit = enterUnits[0].kind == 'imperial';

  function imperialResolver(whatConversion) {
    switch (whatConversion) {
      case 'Longueur':
        return length_UnitsImperial;
      default:
      case 'Poids':
        return weight_UnitsImperial;
    }
  }

  function siResolver(whatConversion) {
    switch (whatConversion) {
      case 'Longueur':
        return length_UnitsSI;
      default:
      case 'Poids':
        return weight_UnitsSI;
    }
  }
  function changeSystemUnit() {
    let temp = resultUnits;
    resultUnits = enterUnits;
    enterUnits = temp;
    inputValue = 0;
    isImperialUnit = !isImperialUnit;
  }
</script>

<h2>{whatConversion}</h2>

<!-- Bouton pour change le système d'unité  -->
<button on:click={changeSystemUnit}>
  {enterUnits[0].kind} -> {resultUnits[0].kind}
</button>

<div class="input-container">
  {#if isImperialUnit}
    {#if whatConversion == 'Longueur'}
      <InputImperialLength bind:inputValue />
    {:else}
      <InputImperialWeight bind:inputValue />
    {/if}
  {:else if whatConversion == 'Longueur'}
    <InputSILength bind:inputValue />
  {:else}
    <InputSIWeight bind:inputValue />
  {/if}
</div>

<Result result={converter(resultUnits, inputValue, factorConversionList)} />

<style>
  .input-container {
    display: flex;
  }
</style>
