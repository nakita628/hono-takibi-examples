import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/http-status-codes.yaml',
  output: './src/3-0-http-status-codes/routes.ts',
  template: {},
  type: { output: './src/3-0-http-status-codes/types.ts' },
  client: { output: './src/3-0-http-status-codes/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-http-status-codes/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-http-status-codes/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-http-status-codes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-http-status-codes/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-http-status-codes/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-http-status-codes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-http-status-codes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-http-status-codes/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-http-status-codes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
