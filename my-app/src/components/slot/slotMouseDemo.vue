<script setup lang="ts">
import { on } from 'events';
import { ref, onMounted, onUnmounted } from 'vue'
const x = ref(0);
const y = ref(0);
const update = (event: MouseEvent) => {
  x.value = event.pageX;
  y.value = event.pageY;
};

onMounted(() => {
  window.addEventListener('mousemove', update);
  console.log('鼠标进入组件，添加监听');
});
onUnmounted(() => {
  window.removeEventListener('mousemove', update);
  console.log('鼠标移出组件，移除监听');
});
</script>

<template>
    <slot :x="x" :y="y"></slot>
</template>
<style scoped>
    .demo-slot-button{
        color:red
    }
    .meta{
      font-size: 0.8em;
      color: red;
    }
</style>
