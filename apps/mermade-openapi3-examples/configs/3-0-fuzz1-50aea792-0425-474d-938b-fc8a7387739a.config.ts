import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/50aea792-0425-474d-938b-fc8a7387739a.yaml',
  output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
