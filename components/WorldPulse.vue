<template>
    <div ref="el" class="world-map"></div>
</template>
  
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watchEffect } from 'vue'
const { $echarts } = useNuxtApp()
// 直接从包里拿世界地图的 geojson
// 若你的构建环境不支持此路径，改为把 world.json 放到 /assets 或 /public 再手动加载
// @ts-ignore
import worldJSON from '../assets/json/world.json'

type Marker = {
    name?: string
    ip: string
    coord: [number, number] // [lng, lat]
}

const props = withDefaults(defineProps<{
    points?: Marker[]
}>(), {
    points: () => ([
        { name: 'New York', ip: '61.52.226.229', coord: [-74.006, 40.7128] },
        { name: 'San Francisco', ip: '61.52.226.229', coord: [-122.4194, 37.7749] },
        { name: 'London', ip: '61.52.226.229', coord: [-0.1276, 51.5072] },
        { name: 'Paris', ip: '61.52.226.229', coord: [2.3522, 48.8566] },
        { name: 'Moscow', ip: '61.52.226.229', coord: [37.6173, 55.7558] },
        { name: 'Cairo', ip: '61.52.226.229', coord: [31.2357, 30.0444] },
        { name: 'Singapore', ip: '61.52.226.229', coord: [103.8198, 1.3521] },
        { name: 'Tokyo', ip: '61.52.226.229', coord: [139.6917, 35.6895] },
        { name: 'Sydney', ip: '61.52.226.229', coord: [151.2093, -33.8688] }
    ])
})

const el = ref<HTMLDivElement | null>(null)
let chart: any

const init = () => {
    if (!el.value) return
    chart = $echarts.init(el.value)
    $echarts.registerMap('world', worldJSON as any)

    const data = props.points.map(p => ({
        name: p.name,
        value: [...p.coord, 1],
        ip: p.ip
    }))

    chart.setOption({
        backgroundColor: '#031B3A',
        geo: {
            map: 'world',
            roam: false,
            left: 0, right: 0, top: 0, bottom: 0,
            itemStyle: {
                areaColor: '#09254F',
                borderColor: '#1E54A6',
                borderWidth: 0.6,
                shadowColor: 'rgba(0,0,0,.4)',
                shadowBlur: 8
            },
            emphasis: { itemStyle: { areaColor: '#0F356C' } },
            label: { show: false }
        },
        tooltip: {
            trigger: 'item',
            formatter: (p: any) => {
                const d = p.data || {}
                return `${d.name || 'Node'}<br/>${d.ip || ''}`
            }
        },
        series: [
            // 1) 涟漪点
            {
                name: 'pulses',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 3,
                rippleEffect: { brushType: 'stroke', scale: 4, period: 6 },
                symbolSize: 10,
                itemStyle: {
                    color: '#25C3FF',
                    shadowBlur: 20,
                    shadowColor: 'rgba(37,195,255,.8)'
                },
                data
            },
            // 2) 胶囊标签（用 scatter 的 label 富文本实现）
            {
                name: 'labels',
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 4,
                symbolSize: 1, // 只作为锚点
                label: {
                    show: true,
                    position: 'top',
                    offset: [0, -16],
                    padding: [6, 10],
                    backgroundColor: 'transparent',
                    formatter: (p: any) => `{tag|${p.data.ip}}`,
                    rich: {
                        tag: {
                            color: '#fff',
                            fontSize: 12,
                            align: 'center',
                            padding: [6, 10],
                            backgroundColor: '#2A6FFF',
                            borderRadius: 6,
                            shadowBlur: 12,
                            shadowColor: 'rgba(42,111,255,.6)'
                        }
                    }
                },
                data
            }
        ]
    })
}

onMounted(() => {
    init()
    const resize = () => chart && chart.resize()
    window.addEventListener('resize', resize)
        // 保存到实例上，卸载时移除
        ; (chart as any).__resize = resize
})

onBeforeUnmount(() => {
    if (chart) {
        window.removeEventListener('resize', (chart as any).__resize)
        chart.dispose()
    }
})
</script>
  
<style scoped>
.world-map {
    width: 100%;
    height: 100vh;
    /* 按需改高 */
}
</style>
  