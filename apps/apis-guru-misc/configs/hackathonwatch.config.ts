import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/hackathonwatch.com/0.1/openapi.yaml',
  output: './src/hackathonwatch/routes.ts',
  docs: {
    output: './src/hackathonwatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
