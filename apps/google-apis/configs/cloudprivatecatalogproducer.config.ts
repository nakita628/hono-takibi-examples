import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudprivatecatalogproducer/v1beta1/openapi.yaml',
  output: './src/cloudprivatecatalogproducer/routes.ts',
  docs: {
    output: './src/cloudprivatecatalogproducer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
