import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/security.yaml',
  output: './src/3-1-security/routes.ts',
  docs: {
    output: './src/3-1-security/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
