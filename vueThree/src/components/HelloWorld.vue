<script setup>
import { onMounted, ref } from "vue";
import { getMockData } from "@/api/test";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
const mockData = ref('')
onMounted(async () => {
  mockData.value = await getMockData().then((res)=> {
    return res?.data
  });
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">{{ mockData }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
