import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/identitytoolkit/v2/openapi.yaml',
  output: './src/identitytoolkit/routes.ts',
  docs: {
    output: './src/identitytoolkit/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
