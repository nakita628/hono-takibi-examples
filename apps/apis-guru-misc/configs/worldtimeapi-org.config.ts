import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/worldtimeapi.org/20210108/openapi.yaml',
  output: './src/worldtimeapi-org/routes.ts',
  docs: {
    output: './src/worldtimeapi-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
