<script>
  import { onMount, onDestroy } from 'svelte';
  import products from '../../stores/defaultProducts';
  let localProducts = [];
  let unsubscribe;
  onMount(() => {
    unsubscribe = products.subscribe(value => {
      console.log("subscribe");
      localProducts = value;
    });
  });
  onDestroy(() => {
    unsubscribe();
  })
</script>

<h1>hello from product component</h1>
{#each localProducts as products}
  <h2>{products.title}</h2>
{/each}