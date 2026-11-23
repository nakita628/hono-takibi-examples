import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mercure.local/0.3.2/openapi.yaml',
  output: './src/mercure/routes.ts',
  template: {},
  type: { output: './src/mercure/types.ts' },
  client: { output: './src/mercure/client.ts', baseUrl: '/' },
  rpc: { output: './src/mercure/rpc.ts', parseResponse: true },
  swr: { output: './src/mercure/hooks/swr.ts' },
  'tanstack-query': { output: './src/mercure/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mercure/hooks/preact-query.ts' },
  'solid-query': { output: './src/mercure/hooks/solid-query.ts' },
  'vue-query': { output: './src/mercure/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mercure/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mercure/hooks/angular-query.ts' },
  docs: {
    output: './src/mercure/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
