import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/goog.io/0.1.0/openapi.yaml',
  output: './src/goog-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/goog-io/types.ts' },
  client: { output: './src/goog-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/goog-io/rpc.ts', parseResponse: true },
  swr: { output: './src/goog-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/goog-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/goog-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/goog-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/goog-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/goog-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/goog-io/hooks/angular-query.ts' },
  docs: {
    output: './src/goog-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
