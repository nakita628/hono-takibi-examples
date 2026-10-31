import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/globalaccelerator/2018-08-08/openapi.yaml',
  output: './src/globalaccelerator/routes.ts',
  docs: {
    output: './src/globalaccelerator/api.md',
    curl: true,
    baseUrl: 'https://globalaccelerator.us-east-1.amazonaws.com',
  },
})
