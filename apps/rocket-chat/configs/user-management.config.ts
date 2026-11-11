import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat User Management API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/user-management.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/user-management.yaml',
  output: './src/user-management/routes.ts',
  docs: {
    output: './src/user-management/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
