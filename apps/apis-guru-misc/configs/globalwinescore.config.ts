import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/globalwinescore.com/8234aab51481d37a30757d925b7f4221a659427e/openapi.yaml',
  output: './src/globalwinescore/routes.ts',
  docs: {
    output: './src/globalwinescore/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
