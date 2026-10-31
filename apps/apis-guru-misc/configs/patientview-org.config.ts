import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/patientview.org/1.0/openapi.yaml',
  output: './src/patientview-org/routes.ts',
  docs: {
    output: './src/patientview-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
