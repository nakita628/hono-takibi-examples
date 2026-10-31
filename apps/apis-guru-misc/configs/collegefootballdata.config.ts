import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/collegefootballdata.com/4.4.12/openapi.yaml',
  output: './src/collegefootballdata/routes.ts',
  docs: {
    output: './src/collegefootballdata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
