import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Statistics API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/statistics.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/statistics.yaml',
  output: './src/statistics/routes.ts',
  docs: {
    output: './src/statistics/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
