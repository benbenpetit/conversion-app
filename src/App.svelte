<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<script>
  import { Router, Route, Link } from 'svelte-routing';
  import ConvertorPage from './pages/ConvertorPage.svelte';
  import TemperaturePage from './pages/TemperaturePage.svelte';
  import 'bulma/css/bulma.css';
</script>

<main class="hero has-text-centered">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1 has-text-primary">Conversion App</h1>
      <Router>
        <nav class="block">
          <Link class="button is-primary is-outlined" to="/">Longueur</Link>
          <Link class="button is-primary is-outlined" to="poids">Poids</Link>
          <Link class="button is-primary is-outlined" to="temperature">Température</Link>
        </nav>
        <div>
          <Route path="/">
            <ConvertorPage
              whatConversion={'Longueur'}
              factorConversionList={[1760, 3, 12]}
            />
          </Route>
          <Route path="poids">
            <ConvertorPage whatConversion={'Poids'} factorConversionList={[16]} />
          </Route>
          <Route path="temperature" component={TemperaturePage} />
        </div>
      </Router>
    </div>
  </div>
</main>