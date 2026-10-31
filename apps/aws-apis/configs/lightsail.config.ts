import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lightsail/2016-11-28/openapi.yaml',
  output: './src/lightsail/routes.ts',
  docs: {
    output: './src/lightsail/api.md',
    curl: true,
    baseUrl: 'https://lightsail.us-east-1.amazonaws.com',
  },
})
