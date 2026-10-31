import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mermade.org.uk/openapi-converter/1.0.0/openapi.yaml',
  output: './src/mermade-org-uk-openapi-converter/routes.ts',
  docs: {
    output: './src/mermade-org-uk-openapi-converter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
