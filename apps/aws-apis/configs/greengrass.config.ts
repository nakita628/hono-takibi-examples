import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/greengrass/2017-06-07/openapi.yaml',
  output: './src/greengrass/routes.ts',
  docs: {
    output: './src/greengrass/api.md',
    curl: true,
    baseUrl: 'https://greengrass.us-east-1.amazonaws.com',
  },
})
