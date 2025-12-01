<script setup lang="ts">
</script>

<template>
    <div v-if="$slots.header"> 
        <slot name="header" :text="'第一个'" :count="2"></slot>
    </div>
    
    <!-- <button class="demo-slot-button">
        <slot :text="'子组件的内容'" :count="2">submit</slot>
    </button> -->
    <slot name="header" :text="'第二个'" :count="3"></slot>
</template>
<style scoped>
    .demo-slot-button{
        color:red
    }
</style>
