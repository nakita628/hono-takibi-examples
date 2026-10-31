import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/file-uploads.yaml',
  output: './src/3-0-file-uploads/routes.ts',
  docs: {
    output: './src/3-0-file-uploads/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
