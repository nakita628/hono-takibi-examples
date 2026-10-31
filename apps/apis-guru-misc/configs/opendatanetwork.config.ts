import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/opendatanetwork.com/1.0.0/openapi.yaml',
  output: './src/opendatanetwork/routes.ts',
  docs: {
    output: './src/opendatanetwork/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
