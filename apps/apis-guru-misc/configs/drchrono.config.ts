import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/drchrono.com/v4 (Hunt Valley)/openapi.yaml',
  output: './src/drchrono/routes.ts',
  docs: {
    output: './src/drchrono/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
