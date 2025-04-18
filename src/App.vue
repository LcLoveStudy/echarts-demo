<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
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
