import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/pricing/0.0.3/openapi.yaml',
  output: './src/pricing/routes.ts',
  docs: {
    output: './src/pricing/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
