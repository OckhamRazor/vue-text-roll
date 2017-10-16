import VueTextRollComponent from './vue-text-roll.vue'

const Plugin = {
}

Plugin.install = (Vue) => {
  if (Plugin.install.installed) return

  Vue.component(VueTextRollComponent.name, VueTextRollComponent)
}

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue)
}

export const VueTextRoll = VueTextRollComponent
export default Plugin
