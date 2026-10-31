import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/f8c97f2c-efa9-4a93-bd39-e7008df12b47.yaml',
  output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
