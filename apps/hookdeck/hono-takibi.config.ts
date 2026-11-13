import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Hookdeck Admin REST API, official OpenAPI spec:
  // https://github.com/hookdeck/hookdeck-api-schema/blob/b1daf8b8f817f4e5d5f416e6ffb99e5a5caeee73/openapi.json
  input: 'https://raw.githubusercontent.com/hookdeck/hookdeck-api-schema/main/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.hookdeck.com/2024-09-01',
  },
})
