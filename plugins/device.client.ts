// plugins/device.client.ts
export default defineNuxtPlugin(() => {
    const mq = window.matchMedia('(max-width: 1023.98px)')
    const apply = () => {
      document.documentElement.classList.toggle('is-mobile', mq.matches)
      document.documentElement.classList.toggle('is-desktop', !mq.matches)
    }
    apply()
    mq.addEventListener?.('change', apply)
  
    // 如果某页面/场景需要 750 设计稿：
    // document.documentElement.classList.remove('d375')
    // document.documentElement.classList.add('d750')
  })
  