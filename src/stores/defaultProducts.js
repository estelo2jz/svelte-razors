import { writable } from 'svelte/store';
import localProducts from '../localProducts';

//flattenProducts([...localProducts])
const store = writable([]);

// subscribe
// set
// update

function flattenProducts(data) {
  return data.map(item => {
    let image = item.image.url;
    return {...item,image};
  })
}

export default store;