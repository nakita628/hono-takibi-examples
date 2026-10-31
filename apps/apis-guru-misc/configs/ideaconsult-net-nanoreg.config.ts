import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ideaconsult.net/nanoreg/4.0.0/openapi.yaml',
  output: './src/ideaconsult-net-nanoreg/routes.ts',
  docs: {
    output: './src/ideaconsult-net-nanoreg/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
