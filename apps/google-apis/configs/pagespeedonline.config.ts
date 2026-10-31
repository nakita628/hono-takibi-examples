import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/pagespeedonline/v5/openapi.yaml',
  output: './src/pagespeedonline/routes.ts',
  docs: {
    output: './src/pagespeedonline/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
