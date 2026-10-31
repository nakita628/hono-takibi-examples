import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/1password.com/events/1.0.0/openapi.yaml',
  output: './src/1password-events/routes.ts',
  docs: {
    output: './src/1password-events/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
