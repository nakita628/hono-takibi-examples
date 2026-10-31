import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nic.at/domainfinder/1.1.0/openapi.yaml',
  output: './src/nic-at-domainfinder/routes.ts',
  docs: {
    output: './src/nic-at-domainfinder/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
