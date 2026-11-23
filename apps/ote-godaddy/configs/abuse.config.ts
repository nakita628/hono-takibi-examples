import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/abuse/1.0.0/openapi.yaml',
  output: './src/abuse/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/abuse/types.ts' },
  client: { output: './src/abuse/client.ts', baseUrl: '/' },
  rpc: { output: './src/abuse/rpc.ts', parseResponse: true },
  swr: { output: './src/abuse/hooks/swr.ts' },
  'tanstack-query': { output: './src/abuse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/abuse/hooks/preact-query.ts' },
  'solid-query': { output: './src/abuse/hooks/solid-query.ts' },
  'vue-query': { output: './src/abuse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/abuse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/abuse/hooks/angular-query.ts' },
  docs: {
    output: './src/abuse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
