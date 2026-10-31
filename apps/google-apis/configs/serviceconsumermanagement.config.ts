import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/serviceconsumermanagement/v1beta1/openapi.yaml',
  output: './src/serviceconsumermanagement/routes.ts',
  docs: {
    output: './src/serviceconsumermanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
