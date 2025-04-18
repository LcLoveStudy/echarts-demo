<template>
  <div class="relative w-full h-full">
    <!-- 粒子特效背景 -->
    <particle-background />
    <!-- 页面内容 -->
    <router-view class="w-full h-full z-2"></router-view>
  </div>
</template>

<script setup lang="ts">
  import { ParticleBackground } from '@/components/particle-background'
  import { useTitle } from '@/hooks'
  const route = useRoute()
  const title = useTitle('')
  watch(
    () => route.path,
    () => {
      title.value = (route.meta.title as string) || ''
    },
    {
      immediate: true
    }
  )
</script>

<style>
  @import 'tailwindcss';
</style>
