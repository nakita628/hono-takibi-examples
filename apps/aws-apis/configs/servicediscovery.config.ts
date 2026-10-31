import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/servicediscovery/2017-03-14/openapi.yaml',
  output: './src/servicediscovery/routes.ts',
  docs: {
    output: './src/servicediscovery/api.md',
    curl: true,
    baseUrl: 'https://servicediscovery.us-east-1.amazonaws.com',
  },
})
