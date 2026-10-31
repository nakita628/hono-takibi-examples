import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shipengine.com/1.1.202303022103/openapi.yaml',
  output: './src/shipengine/routes.ts',
  docs: {
    output: './src/shipengine/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
