import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportdh/3.0.0/openapi.yaml',
  output: './src/transportdh/routes.ts',
  docs: {
    output: './src/transportdh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
