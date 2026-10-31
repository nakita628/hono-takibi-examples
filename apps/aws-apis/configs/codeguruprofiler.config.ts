import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codeguruprofiler/2019-07-18/openapi.yaml',
  output: './src/codeguruprofiler/routes.ts',
  docs: {
    output: './src/codeguruprofiler/api.md',
    curl: true,
    baseUrl: 'https://codeguruprofiler.us-east-1.amazonaws.com',
  },
})
