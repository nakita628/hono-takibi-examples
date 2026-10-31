import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/runtime.lex/2016-11-28/openapi.yaml',
  output: './src/runtime-lex/routes.ts',
  docs: {
    output: './src/runtime-lex/api.md',
    curl: true,
    baseUrl: 'https://runtime-lex.us-east-1.amazonaws.com',
  },
})
