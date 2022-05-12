<script>
  import Input from './components/Input.svelte';
  import Result from './components/Result.svelte';
</script>

<main>
  <h1>Conversion App</h1>
  <div class="container">
    <Input />
    <Input />
    <Input />
    <h2>Résultat de la convertion :</h2>
    <Result />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
