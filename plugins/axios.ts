// plugins/axios.ts
import axios from 'axios'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // 1️⃣ 拿到运行时配置（nuxt.config.ts 里定义的）
  const config = useRuntimeConfig()
  // 2️⃣ 创建一个 axios 实例，默认 baseURL 来自运行时配置
  const api = axios.create({
    baseURL: config.public.apiBase || 'https://api.example.com',
    timeout: 10_000
  })

  // 3️⃣ 你也可以在这里设置请求拦截 / 响应拦截
  api.interceptors.request.use((req) => {
    // 比如自动带上 token
    const token = nuxtApp.$pinia?.state?.user?.token
    if (token) req.headers!['Authorization'] = `Bearer ${token}`
    return req
  })

  // 4️⃣ 注入到 NuxtApp 上，下文里就能拿到 $api
  nuxtApp.provide('api', api)
})
