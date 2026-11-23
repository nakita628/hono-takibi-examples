import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/urlbox.io/v1/openapi.yaml',
  output: './src/urlbox-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/urlbox-io/types.ts' },
  client: { output: './src/urlbox-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/urlbox-io/rpc.ts', parseResponse: true },
  swr: { output: './src/urlbox-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/urlbox-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/urlbox-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/urlbox-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/urlbox-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/urlbox-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/urlbox-io/hooks/angular-query.ts' },
  docs: {
    output: './src/urlbox-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
