import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/osf.io/2.0/openapi.yaml',
  output: './src/osf-io/routes.ts',
  docs: {
    output: './src/osf-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
