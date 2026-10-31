import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/redshift/2012-12-01/openapi.yaml',
  output: './src/redshift/routes.ts',
  docs: {
    output: './src/redshift/api.md',
    curl: true,
    baseUrl: 'https://redshift.us-east-1.amazonaws.com',
  },
})
