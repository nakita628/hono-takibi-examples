import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/obono.at/1.4.0.0/openapi.yaml',
  output: './src/obono-at/routes.ts',
  template: {},
  type: { output: './src/obono-at/types.ts' },
  client: { output: './src/obono-at/client.ts', baseUrl: '/' },
  rpc: { output: './src/obono-at/rpc.ts', parseResponse: true },
  swr: { output: './src/obono-at/hooks/swr.ts' },
  'tanstack-query': { output: './src/obono-at/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/obono-at/hooks/preact-query.ts' },
  'solid-query': { output: './src/obono-at/hooks/solid-query.ts' },
  'vue-query': { output: './src/obono-at/hooks/vue-query.ts' },
  'svelte-query': { output: './src/obono-at/hooks/svelte-query.ts' },
  'angular-query': { output: './src/obono-at/hooks/angular-query.ts' },
  docs: {
    output: './src/obono-at/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
