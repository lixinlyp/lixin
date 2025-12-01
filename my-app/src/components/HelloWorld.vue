<script setup lang="ts">
import { url } from 'inspector'
import { reactive, ref, h } from 'vue'
import slotDemo from './slot/slotDemo.vue'
import slotListDemo from './slot/slotListDemo.vue'
import slotMouseDemo from './slot/slotMouseDemo.vue'
import { idText } from 'typescript';



defineProps<{ msg: string }>()



const count = ref(0)
const msg = ref(123) 
const info = reactive({age:12,cat:{count:1,nub:2}})
setTimeout(() => {
  info.cat.nub++
}, 3000);
const slotName = ref('header');
const url:string = 'https://api.example.com/data';
const itemsObj:Array<{id:number,body:string,username:string, likes:number}> = [{
  id: 1,
  body: 'This is a sample item body.',
  username: 'user123',
  likes: 42
  },
  {
  id: 2,
  body: 'This is another sample item body.',
  username: 'user456',
  likes: 27
  }
];

</script>

<template>
<!--   <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <slotDemo>
    <template #[slotName]="headerProps">
        <h2>这是头部插槽内容</h2>
        {{ headerProps.text }} - {{ headerProps.count }}
    </template>
  </slotDemo>

  <slotListDemo :api-url="url" :per-page="10" :items='itemsObj'>
    <template #item="{body, username, likes}">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">{{ username }} | {{ likes }}</p>
      </div>
    </template>
  </slotListDemo> -->
  <slotMouseDemo v-slot="{x, y}">
    <p class="meta">鼠标当前位置：({{ x }}, {{ y }})</p>
  </slotMouseDemo>  

  <div>我在helloWorld界面啦</div>
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
