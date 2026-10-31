import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/math.tools/1.5/openapi.yaml',
  output: './src/math-tools/routes.ts',
  docs: {
    output: './src/math-tools/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
