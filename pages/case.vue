<template>
    <div class="case">
        <div class="case-pc ">
            <WorldPulse :points="points" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import WorldPulse from '~/components/WorldPulse.vue'

const points = [
    // 实际业务里把 coord 替换为你要展示的经纬度，ip 为标签文本
    { name: '波特兰', ip: '61.52.226.229', coord: [116.4074, 39.9042] },
    { name: '南加州', ip: '61.52.226.229', coord: [-0.1276, 51.5072] },
    { name: '南加州', ip: '61.52.226.229', coord: [151.2093, -33.8688] }
]
</script>

<style scoped lang="scss"></style>