<script setup lang="ts">
defineProps<{
  msg: string
}>()
const rawHtml:any = "<b color='blue'>123</b>"
const dynamicId:string = 'dynamicId'
const objectAttr:any = {
  id: 'dynamicId',
  class: 'dynamicClass',
  style: 'dynamicStyle'
}
const Number:number = 1
const seen:boolean = false
const url:string = 'http://www.baidu.com'
const attributeName:string = 'href'
const bar:string = 'href'
/* let clickA:function() {
  this.Number++
} */

import { ref } from 'vue'
const count = ref(0)
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
  console.log(obj.value)
}
import { nextTick } from 'vue'

const message = ref('原始值');
const updateMessage = async () => {
  message.value = '更新后的值';
  await nextTick(); // 确保 DOM 更新完成
  console.log(document.getElementById('app').textContent); // 获取更新后的 DOM
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <span>{{ msg }}</span>
    <!-- <p>rawhtml {{ rawHtml }}</p> -->
    <div v-bind="objectAttr" v-show="true">红色字体</div>
    <div>红色字体{{ Number + 1 }}</div>
    <!-- <p>Using v-html directive: <span v-html="rawHtml"></span></p> -->
    <div v-if="seen">您能看到我吗</div>
    <a :[attributeName]="url">链接</a>
    <!-- <a :['foo'+bar]="value"> ... </a> -->
    <!-- <a :href="url" @click="clickA"></a> -->
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <button @click="updateMessage">
      {{count}}
    </button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
#dynamicId {
  color: red;
}

.dynamicClass1 {
  font-size: 19px;
}
.dynamicClass2{
  font-size: 19px;
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
