import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Rooms API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/rooms.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/rooms.yaml',
  output: './src/rooms/routes.ts',
  docs: {
    output: './src/rooms/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
