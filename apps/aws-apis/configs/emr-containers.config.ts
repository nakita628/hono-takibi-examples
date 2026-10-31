import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/emr-containers/2020-10-01/openapi.yaml',
  output: './src/emr-containers/routes.ts',
  docs: {
    output: './src/emr-containers/api.md',
    curl: true,
    baseUrl: 'https://emr-containers.us-east-1.amazonaws.com',
  },
})
