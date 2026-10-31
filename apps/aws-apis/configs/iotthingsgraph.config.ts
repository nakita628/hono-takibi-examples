import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotthingsgraph/2018-09-06/openapi.yaml',
  output: './src/iotthingsgraph/routes.ts',
  docs: {
    output: './src/iotthingsgraph/api.md',
    curl: true,
    baseUrl: 'https://iotthingsgraph.us-east-1.amazonaws.com',
  },
})
