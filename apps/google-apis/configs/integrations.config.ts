import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/integrations/v1/openapi.yaml',
  output: './src/integrations/routes.ts',
  docs: {
    output: './src/integrations/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
