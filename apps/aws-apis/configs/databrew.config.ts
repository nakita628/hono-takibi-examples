import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/databrew/2017-07-25/openapi.yaml',
  output: './src/databrew/routes.ts',
  docs: {
    output: './src/databrew/api.md',
    curl: true,
    baseUrl: 'https://databrew.us-east-1.amazonaws.com',
  },
})
