import { ref } from "vue";

export const useCount = () => {
  let count = ref(0);

  return count;
}