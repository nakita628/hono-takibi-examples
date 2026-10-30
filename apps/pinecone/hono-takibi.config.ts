import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/pinecone-io/pinecone-api/main/2025-04/db_control_2025-04.oas.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.pinecone.io',
  },
})
