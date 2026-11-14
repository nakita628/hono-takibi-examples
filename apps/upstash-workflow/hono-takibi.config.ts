import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Upstash Workflow REST API, official OpenAPI spec:
  // https://github.com/upstash/docs/blob/ed6e86df2b81f57fcf32ed6a10b3544db19d0c89/workflow/openapi.yaml
  input: 'https://raw.githubusercontent.com/upstash/docs/main/workflow/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://qstash-eu-central-1.upstash.io',
  },
})
