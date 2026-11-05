import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Vimeo API 3.4, official OpenAPI spec:
  // https://github.com/vimeo/openapi/blob/febb90093551f9e00571c5c25230df08e9af78dd/api.yaml
  input: 'https://raw.githubusercontent.com/vimeo/openapi/master/api.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.vimeo.com',
  },
})
