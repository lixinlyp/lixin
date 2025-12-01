import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import HelloRouterOne from '../views/HelloRouterOne.vue';
import HelloRouterTwo from '../views/HelloRouterTwo.vue';


const routes = [
  { path: '/',name:'default', component: HelloWorld },
  { path: '/helloRouterOne', name:'one', component: HelloRouterOne },
  { path: '/helloRouterTwo', name:'two', component: HelloRouterTwo }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('路由跳转之前', to, from);
  /* if( to.name === "one" ) {
    console.log('禁止跳转到路由1',from.fullPath);
    next('/')
  }
  if( to.name === "two" ) {
    next()
  } */
  next()
});

/* router.afterEach((to, from) => {
  console.log('路由跳转之后', to, from);
}); */


export default router