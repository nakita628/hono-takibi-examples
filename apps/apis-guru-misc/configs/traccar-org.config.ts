import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/traccar.org/5.6/openapi.yaml',
  output: './src/traccar-org/routes.ts',
  docs: {
    output: './src/traccar-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
