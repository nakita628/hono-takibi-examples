import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/conversion/1.0.1/openapi.yaml',
  output: './src/conversion/routes.ts',
  docs: {
    output: './src/conversion/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
