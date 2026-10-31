import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/maif.local/otoroshi/1.5.0-dev/openapi.yaml',
  output: './src/maif-otoroshi/routes.ts',
  docs: {
    output: './src/maif-otoroshi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
