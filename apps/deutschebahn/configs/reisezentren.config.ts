import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/deutschebahn.com/reisezentren/v1/openapi.yaml',
  output: './src/reisezentren/routes.ts',
  docs: {
    output: './src/reisezentren/api.md',
    curl: true,
    baseUrl: 'https://apis.deutschebahn.com',
  },
})
