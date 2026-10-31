import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/networkmanager/2019-07-05/openapi.yaml',
  output: './src/networkmanager/routes.ts',
  docs: {
    output: './src/networkmanager/api.md',
    curl: true,
    baseUrl: 'https://networkmanager.us-east-1.amazonaws.com',
  },
})
