import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appintegrations/2020-07-29/openapi.yaml',
  output: './src/appintegrations/routes.ts',
  docs: {
    output: './src/appintegrations/api.md',
    curl: true,
    baseUrl: 'https://appintegrations.us-east-1.amazonaws.com',
  },
})
