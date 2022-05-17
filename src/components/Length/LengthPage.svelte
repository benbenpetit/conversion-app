<script>
  import InputImperialLength from './InputImperialLength.svelte';
  import { convertLengthOrWeight } from '../../service/convertLengthOrWeight';
  import { length_UnitsImperial, length_UnitsSI } from './dataLength';
  import InputSILength from './InputSILength.svelte';
  import App from '../../App.svelte';

  let options = length_UnitsImperial;
  let result = length_UnitsSI;
  let inputValue;
  let selectedValue;

  $: if (options[0].kind == 'imperial') selectedValue = 'm';
  else {
    selectedValue = 'km';
  }

  $: listConverted = convertLengthOrWeight(
    options,
    result,
    inputValue,
    selectedValue
  );
  $: listSI = formatConversion(Math.trunc(listConverted.pop().value));
  // $: console.log('nombre', Math.trunc(list[6].value));
  // $: console.log('quotient', Math.floor(list[6].value / 10));
  // $: console.log('reste', Math.trunc(list[6].value) % 10);

  function formatConversion(number) {
    let digits = number.toString().split('');
    return digits.map(Number).reverse();
  }

  function changeSystemUnit() {
    let temp = result;
    result = options;
    options = temp;
    inputValue = null;
    selectedValue = undefined;
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

<h2>Résultats :</h2>
<ul>
  {#if options[0].kind == 'imperial'}
    {#each listConverted.reverse() as ele, i}
      <li>{listSI[i] ? listSI[i] : 0}{ele.unit}</li>
    {/each}
  {/if}
</ul>

<style>
  .input-container {
    display: flex;
  }
</style>
