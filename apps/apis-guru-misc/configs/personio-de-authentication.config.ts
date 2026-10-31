import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/personio.de/authentication/1.0/openapi.yaml',
  output: './src/personio-de-authentication/routes.ts',
  docs: {
    output: './src/personio-de-authentication/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
