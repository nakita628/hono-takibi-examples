import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/karakeep-app/karakeep/main/packages/open-api/karakeep-openapi-spec.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:3000/api/v1',
  },
})
