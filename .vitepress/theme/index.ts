import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import LoomEmbed from './LoomEmbed.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LoomEmbed', LoomEmbed)
  }
} satisfies Theme
