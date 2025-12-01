<script setup lang="ts">
import { reactive, ref, h } from 'vue'
import { RouterLink, useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();

const route = useRouter()
console.log('当前路由参数：', route.currentRoute.value.query);

</script>

<template>
    <div>我在路由2界面啦！</div>
    <RouterLink to="/helloRouterOne">去路由1</RouterLink>
    <div>路由携带参数：{{ $route.query }}</div>
    <div>通过pinia状态得到的数据 {{ counterStore.count }}</div>
    <button @click="counterStore.increment">+1</button>
    <button @click="counterStore.doubleCount">*2</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
