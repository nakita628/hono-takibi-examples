import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rebilly.com/2.1/openapi.yaml',
  output: './src/rebilly/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/rebilly/types.ts' },
  client: { output: './src/rebilly/client.ts', baseUrl: '/' },
  rpc: { output: './src/rebilly/rpc.ts', parseResponse: true },
  swr: { output: './src/rebilly/hooks/swr.ts' },
  'tanstack-query': { output: './src/rebilly/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rebilly/hooks/preact-query.ts' },
  'solid-query': { output: './src/rebilly/hooks/solid-query.ts' },
  'vue-query': { output: './src/rebilly/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rebilly/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rebilly/hooks/angular-query.ts' },
  docs: {
    output: './src/rebilly/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
