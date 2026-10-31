import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ideaconsult.net/enanomapper/4.0.0/openapi.yaml',
  output: './src/ideaconsult-net-enanomapper/routes.ts',
  docs: {
    output: './src/ideaconsult-net-enanomapper/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
