<script>
  import InputNumber from '../InputNumber.svelte';

  let livreValue = 0;
  let onceValue = 0;

  export let inputValue;

  $: if (onceValue >= 16) {
    livreValue ? livreValue++ : (livreValue = 1);
    onceValue = 0;
  }

  $: inputValue = livreValue + onceValue / 16;
</script>

<InputNumber label="Livre" bind:value={livreValue} />
<InputNumber label="Once" bind:value={onceValue} />

<style>
</style>
