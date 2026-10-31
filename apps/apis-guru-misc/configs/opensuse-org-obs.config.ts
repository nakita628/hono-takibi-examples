import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/opensuse.org/obs/2.10.50/openapi.yaml',
  output: './src/opensuse-org-obs/routes.ts',
  docs: {
    output: './src/opensuse-org-obs/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
