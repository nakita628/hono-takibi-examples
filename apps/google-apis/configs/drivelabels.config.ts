import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/drivelabels/v2beta/openapi.yaml',
  output: './src/drivelabels/routes.ts',
  docs: {
    output: './src/drivelabels/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
