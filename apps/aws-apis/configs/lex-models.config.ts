import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lex-models/2017-04-19/openapi.yaml',
  output: './src/lex-models/routes.ts',
  docs: {
    output: './src/lex-models/api.md',
    curl: true,
    baseUrl: 'https://lex-models.us-east-1.amazonaws.com',
  },
})
