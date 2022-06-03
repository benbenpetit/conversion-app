<script>
  import InputImperialLength from '../components/Length/InputImperialLength.svelte';
  import InputSILength from '../components/Length/InputSILength.svelte';
  import InputImperialWeight from '../components/Weight/InputImperialWeight.svelte';
  import InputSIWeight from '../components/Weight/InputSIWeight.svelte';
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

<h2 class="title is-3 has-text-primary">{whatConversion}</h2>

<!-- Bouton pour changer le système d'unité  -->
<button class="button is-primary block" on:click={changeSystemUnit}>
  {enterUnits[0].kind}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg>
  <i class="p-2 fas fa-arrow-right-long" />
  {resultUnits[0].kind}
</button>

<div class="container block">
  <div class="is-inline-flex">
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
</div>

<Result result={converter(resultUnits, inputValue, factorConversionList)} />
