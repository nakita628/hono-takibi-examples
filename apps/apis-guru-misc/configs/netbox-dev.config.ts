import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/netbox.dev/3.4/openapi.yaml',
  output: './src/netbox-dev/routes.ts',
  docs: {
    output: './src/netbox-dev/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
