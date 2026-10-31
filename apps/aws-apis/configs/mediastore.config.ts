import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediastore/2017-09-01/openapi.yaml',
  output: './src/mediastore/routes.ts',
  docs: {
    output: './src/mediastore/api.md',
    curl: true,
    baseUrl: 'https://mediastore.us-east-1.amazonaws.com',
  },
})
