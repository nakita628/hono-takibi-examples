import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/oralquestions/v1/openapi.yaml',
  output: './src/oralquestions/routes.ts',
  docs: {
    output: './src/oralquestions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
