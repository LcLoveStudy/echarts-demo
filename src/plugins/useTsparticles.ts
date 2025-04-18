import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
import type { App } from 'vue'

/** 使用原子粒子插件 */
export const useTsparticles = (app: App<Element>) => {
  app.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine)
    }
  })
}
