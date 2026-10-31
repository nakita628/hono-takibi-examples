import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gsmtasks.com/2.4.13/openapi.yaml',
  output: './src/gsmtasks/routes.ts',
  docs: {
    output: './src/gsmtasks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
