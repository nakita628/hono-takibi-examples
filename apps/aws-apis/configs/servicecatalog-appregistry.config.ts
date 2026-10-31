import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/servicecatalog-appregistry/2020-06-24/openapi.yaml',
  output: './src/servicecatalog-appregistry/routes.ts',
  docs: {
    output: './src/servicecatalog-appregistry/api.md',
    curl: true,
    baseUrl: 'https://servicecatalog-appregistry.us-east-1.amazonaws.com',
  },
})
