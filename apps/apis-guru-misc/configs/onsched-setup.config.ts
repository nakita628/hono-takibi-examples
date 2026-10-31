import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/onsched.com/setup/v1/openapi.yaml',
  output: './src/onsched-setup/routes.ts',
  docs: {
    output: './src/onsched-setup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
