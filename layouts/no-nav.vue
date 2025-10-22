<template>
    <!-- 这里渲染 pages/**/index.vue、about.vue…… -->
    <NuxtPage />
</template>
  
<script setup lang="ts">
// import { useRoute, usePageMeta } from '#imports'

// 从页面 meta 里取出 nav 字段，默认 true
// const pageMeta = usePageMeta()
// console.log(pageMeta,'pageMeta')
// const showNav = computed(() => pageMeta.value.nav !== false)
</script>

<style scoped>
header,
footer {
    padding: 12px;
    background: #f5f5f5;
    text-align: center;
}</style>
  