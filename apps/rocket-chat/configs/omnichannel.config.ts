import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Rocket.Chat Omnichannel API, official OpenAPI spec:
  // https://github.com/RocketChat/Rocket.Chat-Open-API/blob/f920bb9c701aa12ea03e040a50566e3689c63d59/omnichannel.yaml
  input:
    'https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/omnichannel.yaml',
  output: './src/omnichannel/routes.ts',
  docs: {
    output: './src/omnichannel/api.md',
    curl: true,
    baseUrl: 'https://apiexplorer.support.rocket.chat',
  },
})
