import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/redshift-data/2019-12-20/openapi.yaml',
  output: './src/redshift-data/routes.ts',
  docs: {
    output: './src/redshift-data/api.md',
    curl: true,
    baseUrl: 'https://redshift-data.us-east-1.amazonaws.com',
  },
})
