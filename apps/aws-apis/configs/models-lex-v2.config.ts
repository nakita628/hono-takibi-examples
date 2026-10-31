import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/models.lex.v2/2020-08-07/openapi.yaml',
  output: './src/models-lex-v2/routes.ts',
  docs: {
    output: './src/models-lex-v2/api.md',
    curl: true,
    baseUrl: 'https://models-lex-v2.us-east-1.amazonaws.com',
  },
})
