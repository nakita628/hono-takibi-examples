import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/es/2015-01-01/openapi.yaml',
  output: './src/es/routes.ts',
  template: {},
  type: { output: './src/es/types.ts' },
  client: { output: './src/es/client.ts', baseUrl: '/' },
  rpc: { output: './src/es/rpc.ts', parseResponse: true },
  swr: { output: './src/es/hooks/swr.ts' },
  'tanstack-query': { output: './src/es/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/es/hooks/preact-query.ts' },
  'solid-query': { output: './src/es/hooks/solid-query.ts' },
  'vue-query': { output: './src/es/hooks/vue-query.ts' },
  'svelte-query': { output: './src/es/hooks/svelte-query.ts' },
  'angular-query': { output: './src/es/hooks/angular-query.ts' },
  docs: {
    output: './src/es/api.md',
    curl: true,
    baseUrl: 'https://es.us-east-1.amazonaws.com',
  },
})
