import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/subscriptions/1.0.0/openapi.yaml',
  output: './src/subscriptions/routes.ts',
  template: {},
  type: { output: './src/subscriptions/types.ts' },
  client: { output: './src/subscriptions/client.ts', baseUrl: '/' },
  rpc: { output: './src/subscriptions/rpc.ts', parseResponse: true },
  swr: { output: './src/subscriptions/hooks/swr.ts' },
  'tanstack-query': { output: './src/subscriptions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/subscriptions/hooks/preact-query.ts' },
  'solid-query': { output: './src/subscriptions/hooks/solid-query.ts' },
  'vue-query': { output: './src/subscriptions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/subscriptions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/subscriptions/hooks/angular-query.ts' },
  docs: {
    output: './src/subscriptions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
