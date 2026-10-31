import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/comprehendmedical/2018-10-30/openapi.yaml',
  output: './src/comprehendmedical/routes.ts',
  docs: {
    output: './src/comprehendmedical/api.md',
    curl: true,
    baseUrl: 'https://comprehendmedical.us-east-1.amazonaws.com',
  },
})
