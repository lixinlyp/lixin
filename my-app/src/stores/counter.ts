import { defineStore} from 'pinia';
import { ref } from 'vue';
import { useCount } from '../composalbe/useCount';


/* export const useCounterStore = defineStore('counter', {
  state: () => {
    count: 0 
  },
  getters: {
    doubleCount: (state:any) => state.count * 2
  },
  actions: {
    increment:(state:any) => state.count++
  }
}) */
 export const useCounterStore = defineStore('counter', () =>{
  const count = useCount();
  const increment = () => count.value++;
  const doubleCount = () => count.value *= 2;
  return { count, increment, doubleCount };
})