import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/servicecatalog/2015-12-10/openapi.yaml',
  output: './src/servicecatalog/routes.ts',
  docs: {
    output: './src/servicecatalog/api.md',
    curl: true,
    baseUrl: 'https://servicecatalog.us-east-1.amazonaws.com',
  },
})
