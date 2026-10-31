import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codeguru-reviewer/2019-09-19/openapi.yaml',
  output: './src/codeguru-reviewer/routes.ts',
  docs: {
    output: './src/codeguru-reviewer/api.md',
    curl: true,
    baseUrl: 'https://codeguru-reviewer.us-east-1.amazonaws.com',
  },
})
