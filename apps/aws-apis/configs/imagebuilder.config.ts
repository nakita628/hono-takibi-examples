import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/imagebuilder/2019-12-02/openapi.yaml',
  output: './src/imagebuilder/routes.ts',
  docs: {
    output: './src/imagebuilder/api.md',
    curl: true,
    baseUrl: 'https://imagebuilder.us-east-1.amazonaws.com',
  },
})
