import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openlinksw.com/osdb/1.0.0/openapi.yaml',
  output: './src/openlinksw-osdb/routes.ts',
  docs: {
    output: './src/openlinksw-osdb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
