import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Content Management API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/content-management.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/content-management.yaml',
  output: './src/content-management/routes.ts',
  docs: {
    output: './src/content-management/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
