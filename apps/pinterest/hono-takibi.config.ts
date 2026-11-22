import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Pinterest REST API v5, official OpenAPI spec:
  // https://github.com/pinterest/api-description/blob/2503147fd9f86f26230891b8534b678c31cc849a/v5/openapi.yaml
  input: 'https://raw.githubusercontent.com/pinterest/api-description/main/v5/openapi.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.pinterest.com/v5',
  },
})
