import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Marketplace Apps API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/marketplace-apps.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/marketplace-apps.yaml',
  output: './src/marketplace-apps/routes.ts',
  docs: {
    output: './src/marketplace-apps/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
