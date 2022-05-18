<script>
  import InputNumber from '../InputNumber.svelte';

  let mileValue = 0;
  let yardValue = 0;
  let footValue = 0;
  let inchValue = 0;

  export let inputValue;

  $: if (inchValue >= 12) {
    footValue++;
    inchValue = 0;
  }

  $: if (footValue >= 3) {
    yardValue++;
    footValue = 0;
  }

  $: if (yardValue >= 1760) {
    mileValue++;
    yardValue = 0;
  }

  //On convertie toutes les valeurs en mm
  $: inputValue = Math.trunc(
    (mileValue + yardValue / 1760 + footValue / 5280 + inchValue / 63360) *
      1.609 *
      Math.pow(10, 6)
  );
</script>

<InputNumber label="Mile" bind:value={mileValue} />
<InputNumber label="Yard" bind:value={yardValue} />
<InputNumber label="Foot" bind:value={footValue} />
<InputNumber label="Inch" bind:value={inchValue} />

<style>
</style>
