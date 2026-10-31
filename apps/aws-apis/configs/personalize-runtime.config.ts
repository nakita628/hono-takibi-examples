import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/personalize-runtime/2018-05-22/openapi.yaml',
  output: './src/personalize-runtime/routes.ts',
  docs: {
    output: './src/personalize-runtime/api.md',
    curl: true,
    baseUrl: 'https://personalize-runtime.us-east-1.amazonaws.com',
  },
})
