import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/webhook.yml',
  output: './src/webhook/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webhook/types.ts' },
  client: { output: './src/webhook/client.ts', baseUrl: '/' },
  rpc: { output: './src/webhook/rpc.ts', parseResponse: true },
  swr: { output: './src/webhook/hooks/swr.ts' },
  'tanstack-query': { output: './src/webhook/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webhook/hooks/preact-query.ts' },
  'solid-query': { output: './src/webhook/hooks/solid-query.ts' },
  'vue-query': { output: './src/webhook/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webhook/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webhook/hooks/angular-query.ts' },
  docs: {
    output: './src/webhook/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
