import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Figma REST API: https://github.com/figma/rest-api-spec
  input: 'https://raw.githubusercontent.com/figma/rest-api-spec/main/openapi/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.figma.com',
  },
})
