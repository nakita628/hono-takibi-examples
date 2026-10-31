import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/chime/2018-05-01/openapi.yaml',
  output: './src/chime/routes.ts',
  docs: {
    output: './src/chime/api.md',
    curl: true,
    baseUrl: 'https://chime.us-east-1.amazonaws.com',
  },
})
