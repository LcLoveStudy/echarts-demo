import type { App } from 'vue'
import { useTsparticles } from './useTsparticles'
/** 注册插件 */
const usePlugins = (app: App<Element>) => {
  useTsparticles(app)
}

export default usePlugins
