import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lookoutequipment/2020-12-15/openapi.yaml',
  output: './src/lookoutequipment/routes.ts',
  docs: {
    output: './src/lookoutequipment/api.md',
    curl: true,
    baseUrl: 'https://lookoutequipment.us-east-1.amazonaws.com',
  },
})
