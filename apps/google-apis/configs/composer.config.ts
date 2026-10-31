import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/composer/v1beta1/openapi.yaml',
  output: './src/composer/routes.ts',
  docs: {
    output: './src/composer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
