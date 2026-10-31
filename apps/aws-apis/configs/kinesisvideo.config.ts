import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesisvideo/2017-09-30/openapi.yaml',
  output: './src/kinesisvideo/routes.ts',
  docs: {
    output: './src/kinesisvideo/api.md',
    curl: true,
    baseUrl: 'https://kinesisvideo.us-east-1.amazonaws.com',
  },
})
