import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudprivatecatalog/v1beta1/openapi.yaml',
  output: './src/cloudprivatecatalog/routes.ts',
  docs: {
    output: './src/cloudprivatecatalog/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
