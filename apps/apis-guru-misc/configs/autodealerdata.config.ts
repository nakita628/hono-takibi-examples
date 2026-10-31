import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/autodealerdata.com/1.0/openapi.yaml',
  output: './src/autodealerdata/routes.ts',
  docs: {
    output: './src/autodealerdata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
