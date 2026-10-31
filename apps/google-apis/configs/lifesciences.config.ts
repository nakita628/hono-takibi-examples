import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/lifesciences/v2beta/openapi.yaml',
  output: './src/lifesciences/routes.ts',
  docs: {
    output: './src/lifesciences/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
