import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/axesso.de/1.0.0/openapi.yaml',
  output: './src/axesso-de/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/axesso-de/types.ts' },
  client: { output: './src/axesso-de/client.ts', baseUrl: '/' },
  rpc: { output: './src/axesso-de/rpc.ts', parseResponse: true },
  swr: { output: './src/axesso-de/hooks/swr.ts' },
  'tanstack-query': { output: './src/axesso-de/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/axesso-de/hooks/preact-query.ts' },
  'solid-query': { output: './src/axesso-de/hooks/solid-query.ts' },
  'vue-query': { output: './src/axesso-de/hooks/vue-query.ts' },
  'svelte-query': { output: './src/axesso-de/hooks/svelte-query.ts' },
  'angular-query': { output: './src/axesso-de/hooks/angular-query.ts' },
  docs: {
    output: './src/axesso-de/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
