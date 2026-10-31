import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediastore-data/2017-09-01/openapi.yaml',
  output: './src/mediastore-data/routes.ts',
  docs: {
    output: './src/mediastore-data/api.md',
    curl: true,
    baseUrl: 'https://mediastore-data.us-east-1.amazonaws.com',
  },
})
