<script>
  import { Router, Route, Link } from 'svelte-routing';
  import LengthPage from './components/Length/LengthPage.svelte';
  import WeightPage from './components/Weight/WeightPage.svelte';
  import TemperaturePage from './components/Temperature/TemperaturePage.svelte';
</script>

<main>
  <h1>Conversion App</h1>
  <Router>
    <nav>
      <Link to="/">Longueur</Link>
      <Link to="poids">Poids</Link>
      <Link to="temperature">Température</Link>
    </nav>
    <div>
      <Route path="/" component={LengthPage} />
      <Route path="poids" component={WeightPage} />
      <Route path="temperature" component={TemperaturePage} />
    </div>
  </Router>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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
