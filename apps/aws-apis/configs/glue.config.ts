import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/glue/2017-03-31/openapi.yaml',
  output: './src/glue/routes.ts',
  docs: {
    output: './src/glue/api.md',
    curl: true,
    baseUrl: 'https://glue.us-east-1.amazonaws.com',
  },
})
