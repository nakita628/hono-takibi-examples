import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Messaging API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/messaging.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/messaging.yaml',
  output: './src/messaging/routes.ts',
  docs: {
    output: './src/messaging/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
