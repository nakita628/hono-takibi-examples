import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/botify.com/1.0.0/openapi.yaml',
  output: './src/botify/routes.ts',
  template: {},
  type: { output: './src/botify/types.ts' },
  client: { output: './src/botify/client.ts', baseUrl: '/' },
  rpc: { output: './src/botify/rpc.ts', parseResponse: true },
  swr: { output: './src/botify/hooks/swr.ts' },
  'tanstack-query': { output: './src/botify/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/botify/hooks/preact-query.ts' },
  'solid-query': { output: './src/botify/hooks/solid-query.ts' },
  'vue-query': { output: './src/botify/hooks/vue-query.ts' },
  'svelte-query': { output: './src/botify/hooks/svelte-query.ts' },
  'angular-query': { output: './src/botify/hooks/angular-query.ts' },
  docs: {
    output: './src/botify/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
