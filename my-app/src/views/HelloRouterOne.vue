<script setup lang="ts">
import { reactive, ref, h } from 'vue'
import { RouterLink, useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();


const router = useRouter();

</script>

<template>
    <div>我在路由1界面啦！</div>
    <RouterLink to="/helloRouterTwo">去路由2</RouterLink>
    <button @click="router.push({path: '/helloRouterTwo', query:{a:1}});">去路由2按钮</button>
    <div>通过pinia状态得到的数据 {{ counterStore.count }}</div>
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
