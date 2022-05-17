<script>
  import InputNumber from '../InputNumber.svelte';

  let kgValue = 0;
  let hgValue = 0;
  let dagValue = 0;
  let gValue = 0;
  let dgValue = 0;
  let cgValue = 0;
  let mgValue = 0;

  export let inputValue;

  $: if (mgValue >= 10) {
    cgValue++;
    mgValue = 0;
  }

  $: if (cgValue >= 10) {
    dgValue++;
    cgValue = 0;
  }

  $: if (dgValue >= 10) {
    gValue++;
    dgValue = 0;
  }

  $: if (gValue >= 10) {
    dagValue++;
    gValue = 0;
  }

  $: if (dagValue >= 10) {
    hgValue++;
    dagValue = 0;
  }

  $: if (hgValue >= 10) {
    kgValue++;
    hgValue = 0;
  }

  //On convertie toutes les valeurs en Kg
  $: inputValue =
    kgValue +
    dagValue / Math.pow(10, 1) +
    hgValue / Math.pow(10, 2) +
    gValue / Math.pow(10, 3) +
    dgValue / Math.pow(10, 4) +
    cgValue / Math.pow(10, 5) +
    mgValue / Math.pow(10, 6);
</script>

<InputNumber label="Kilogramme" bind:value={kgValue} />
<InputNumber label="Hectogramme" bind:value={hgValue} />
<InputNumber label="Decagramme" bind:value={dagValue} />
<InputNumber label="Gramme" bind:value={gValue} />
<InputNumber label="Décigramme" bind:value={dgValue} />
<InputNumber label="Centigramme" bind:value={cgValue} />
<InputNumber label="Minigramme" bind:value={mgValue} />

<style>
</style>
