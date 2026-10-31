import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bitbucket.org/2.0/openapi.yaml',
  output: './src/bitbucket-org/routes.ts',
  docs: {
    output: './src/bitbucket-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
