import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/svix.com/1.4/openapi.yaml',
  output: './src/svix/routes.ts',
  docs: {
    output: './src/svix/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
