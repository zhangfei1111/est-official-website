<template>
  <div class="app">
    <div class="app-pc only-desktop">
      App

    </div>
    <div class="app-mobile only-mobile">手机端</div>
  </div>
</template>
    
<script setup lang="ts">


import { onMounted, ref, onUnmounted, nextTick } from 'vue'


// 页面元信息
definePageMeta({
  title: 'Home'
})
</script>
<style scoped lang="scss"></style>
  
    