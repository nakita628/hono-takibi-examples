import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elastictranscoder/2012-09-25/openapi.yaml',
  output: './src/elastictranscoder/routes.ts',
  docs: {
    output: './src/elastictranscoder/api.md',
    curl: true,
    baseUrl: 'https://elastictranscoder.us-east-1.amazonaws.com',
  },
})
