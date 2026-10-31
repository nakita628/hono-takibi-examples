import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/containeranalysis/v1beta1/openapi.yaml',
  output: './src/containeranalysis/routes.ts',
  docs: {
    output: './src/containeranalysis/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
