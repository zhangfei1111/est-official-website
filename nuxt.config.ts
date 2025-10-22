// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  runtimeConfig: {
    public: {
      apiBase: process.env.VITE_API_BASE_URL // 比如 .env 里定义
    }
  },
  css: [
    'swiper/css',
    '~/assets/styles/base.css'
  ],
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 100,           // 对齐 “1rem≈100px”
        unitPrecision: 5,
        propList: ['*'],          // 也可逐步放开
        selectorBlackList: [],    // ['.no-rem'] 可用来跳过某些选择器
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      }
    }
  },
  // 如果你想用原子化样式，解注释即可：
  // modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})
