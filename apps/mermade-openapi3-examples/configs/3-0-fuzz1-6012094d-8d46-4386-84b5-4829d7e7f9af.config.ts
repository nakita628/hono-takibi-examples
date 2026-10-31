import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/6012094d-8d46-4386-84b5-4829d7e7f9af.yaml',
  output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
