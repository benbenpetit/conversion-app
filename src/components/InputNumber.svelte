<script>
  export let label;
  export let value;
</script>

<div>
  <label for={label.toLowerCase()}>{label}</label>
  <input
    min="0"
    id={label.toLowerCase()}
    placeholder={label}
    type="number"
    bind:value
  />
</div>

<style>
  input {
    width: 100px;
    text-align: center;
  }
</style>
