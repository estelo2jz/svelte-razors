<script>
  import { onMount, onDestroy } from 'svelte';
  import products from '../../stores/defaultProducts';
  let localProducts = [];
  onMount(() => {
    products.subscribe(value => {
      localProducts = value;
    });
  });
</script>

<h1>hello from product component</h1>
{#each localProducts as products}
  <h2>{products.title}</h2>
{/each}