import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/spellcheckpro/1.0.0/openapi.yaml',
  output: './src/rapidapi-spellcheckpro/routes.ts',
  docs: {
    output: './src/rapidapi-spellcheckpro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
