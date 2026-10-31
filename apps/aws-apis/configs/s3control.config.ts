import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/s3control/2018-08-20/openapi.yaml',
  output: './src/s3control/routes.ts',
  docs: {
    output: './src/s3control/api.md',
    curl: true,
    baseUrl: 'https://s3control.us-east-1.amazonaws.com',
  },
})
