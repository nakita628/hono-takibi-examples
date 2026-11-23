import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/connector/9.3.0/openapi.yaml',
  output: './src/connector/routes.ts',
  template: {},
  type: { output: './src/connector/types.ts' },
  client: { output: './src/connector/client.ts', baseUrl: '/' },
  rpc: { output: './src/connector/rpc.ts', parseResponse: true },
  swr: { output: './src/connector/hooks/swr.ts' },
  'tanstack-query': { output: './src/connector/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/connector/hooks/preact-query.ts' },
  'solid-query': { output: './src/connector/hooks/solid-query.ts' },
  'vue-query': { output: './src/connector/hooks/vue-query.ts' },
  'svelte-query': { output: './src/connector/hooks/svelte-query.ts' },
  'angular-query': { output: './src/connector/hooks/angular-query.ts' },
  docs: {
    output: './src/connector/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
