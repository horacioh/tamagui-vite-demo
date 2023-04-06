import * as tPlugin from '@tamagui/vite-plugin'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    tPlugin.tamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['@tamagui/web'],
    }),
    // optional, adds the optimizing compiler:
    // tamaguiExtractPlugin(tamaguiConfig),
  ],
})
