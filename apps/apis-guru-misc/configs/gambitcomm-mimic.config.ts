import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gambitcomm.local/mimic/21.00/openapi.yaml',
  output: './src/gambitcomm-mimic/routes.ts',
  docs: {
    output: './src/gambitcomm-mimic/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
