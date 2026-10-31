import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/kumpeapps.com/5.0.0/openapi.yaml',
  output: './src/kumpeapps/routes.ts',
  docs: {
    output: './src/kumpeapps/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
