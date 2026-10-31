import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/devicefarm/2015-06-23/openapi.yaml',
  output: './src/devicefarm/routes.ts',
  docs: {
    output: './src/devicefarm/api.md',
    curl: true,
    baseUrl: 'https://devicefarm.us-east-1.amazonaws.com',
  },
})
