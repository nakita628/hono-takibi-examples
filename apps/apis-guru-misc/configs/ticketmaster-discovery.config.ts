import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ticketmaster.com/discovery/v2/openapi.yaml',
  output: './src/ticketmaster-discovery/routes.ts',
  docs: {
    output: './src/ticketmaster-discovery/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
