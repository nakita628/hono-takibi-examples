import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dev.to/1.0.0/openapi.yaml',
  output: './src/dev-to/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dev-to/types.ts' },
  client: { output: './src/dev-to/client.ts', baseUrl: '/' },
  rpc: { output: './src/dev-to/rpc.ts', parseResponse: true },
  swr: { output: './src/dev-to/hooks/swr.ts' },
  'tanstack-query': { output: './src/dev-to/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dev-to/hooks/preact-query.ts' },
  'solid-query': { output: './src/dev-to/hooks/solid-query.ts' },
  'vue-query': { output: './src/dev-to/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dev-to/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dev-to/hooks/angular-query.ts' },
  docs: {
    output: './src/dev-to/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
