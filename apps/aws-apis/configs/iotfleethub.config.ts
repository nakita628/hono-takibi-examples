import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotfleethub/2020-11-03/openapi.yaml',
  output: './src/iotfleethub/routes.ts',
  docs: {
    output: './src/iotfleethub/api.md',
    curl: true,
    baseUrl: 'https://iotfleethub.us-east-1.amazonaws.com',
  },
})
