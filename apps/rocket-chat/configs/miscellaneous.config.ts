import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Miscellaneous API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/miscellaneous.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/miscellaneous.yaml',
  output: './src/miscellaneous/routes.ts',
  docs: {
    output: './src/miscellaneous/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
