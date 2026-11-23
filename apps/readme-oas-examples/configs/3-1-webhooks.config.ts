import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/webhooks.yaml',
  output: './src/3-1-webhooks/routes.ts',
  template: {},
  type: { output: './src/3-1-webhooks/types.ts' },
  client: { output: './src/3-1-webhooks/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-webhooks/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-webhooks/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-webhooks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-webhooks/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-webhooks/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-webhooks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-webhooks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-webhooks/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-webhooks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
