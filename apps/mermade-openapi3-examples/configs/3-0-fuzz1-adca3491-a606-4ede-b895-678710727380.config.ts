import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/adca3491-a606-4ede-b895-678710727380.yaml',
  output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
