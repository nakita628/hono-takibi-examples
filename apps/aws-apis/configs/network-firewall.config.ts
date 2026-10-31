import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/network-firewall/2020-11-12/openapi.yaml',
  output: './src/network-firewall/routes.ts',
  docs: {
    output: './src/network-firewall/api.md',
    curl: true,
    baseUrl: 'https://network-firewall.us-east-1.amazonaws.com',
  },
})
