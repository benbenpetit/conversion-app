<script>
  import InputNumber from '../InputNumber.svelte';

  let kmValue = 0;
  let hmValue = 0;
  let damValue = 0;
  let mValue = 0;
  let dmValue = 0;
  let cmValue = 0;
  let mmValue = 0;

  export let inputValue;

  $: if (mmValue >= 10) {
    cmValue++;
    mmValue = 0;
  }

  $: if (cmValue >= 10) {
    dmValue++;
    cmValue = 0;
  }

  $: if (dmValue >= 10) {
    mValue++;
    dmValue = 0;
  }

  $: if (mValue >= 10) {
    damValue++;
    mValue = 0;
  }

  $: if (damValue >= 10) {
    hmValue++;
    damValue = 0;
  }

  $: if (hmValue >= 10) {
    kmValue++;
    hmValue = 0;
  }

  //On convertit toutes les valeurs en Mile
  $: inputValue =
    (
      kmValue +
      damValue / Math.pow(10, 1) +
      hmValue / Math.pow(10, 2) +
      mValue / Math.pow(10, 3) +
      dmValue / Math.pow(10, 4) +
      cmValue / Math.pow(10, 5) +
      mmValue / Math.pow(10, 6)
    ).toFixed(6) / 1.609;
</script>

<InputNumber label="Kilomètre" bind:value={kmValue} />
<InputNumber label="Hectomètre" bind:value={hmValue} />
<InputNumber label="Decamètre" bind:value={damValue} />
<InputNumber label="Mètre" bind:value={mValue} />
<InputNumber label="Décimètre" bind:value={dmValue} />
<InputNumber label="Centimètre" bind:value={cmValue} />
<InputNumber label="Millimètre" bind:value={mmValue} />

<style>
</style>
