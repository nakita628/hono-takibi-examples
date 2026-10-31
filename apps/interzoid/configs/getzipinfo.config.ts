import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getzipinfo/1.0.0/openapi.yaml',
  output: './src/getzipinfo/routes.ts',
  docs: {
    output: './src/getzipinfo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
