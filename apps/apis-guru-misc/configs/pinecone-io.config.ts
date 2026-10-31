import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pinecone.io/20230401.1/openapi.yaml',
  output: './src/pinecone-io/routes.ts',
  docs: {
    output: './src/pinecone-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
