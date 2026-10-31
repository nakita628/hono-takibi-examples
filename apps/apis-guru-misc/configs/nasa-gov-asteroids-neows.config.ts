import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nasa.gov/asteroids neows/3.4.0/openapi.yaml',
  output: './src/nasa-gov-asteroids-neows/routes.ts',
  docs: {
    output: './src/nasa-gov-asteroids-neows/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
