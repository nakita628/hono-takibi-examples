import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ticketmaster.com/publish/v2/openapi.yaml',
  output: './src/ticketmaster-publish/routes.ts',
  docs: {
    output: './src/ticketmaster-publish/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
