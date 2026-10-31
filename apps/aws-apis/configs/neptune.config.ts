import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/neptune/2014-10-31/openapi.yaml',
  output: './src/neptune/routes.ts',
  docs: {
    output: './src/neptune/api.md',
    curl: true,
    baseUrl: 'https://neptune.us-east-1.amazonaws.com',
  },
})
