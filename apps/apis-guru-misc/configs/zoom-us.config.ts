import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zoom.us/2.0.0/openapi.yaml',
  output: './src/zoom-us/routes.ts',
  template: {},
  type: { output: './src/zoom-us/types.ts' },
  client: { output: './src/zoom-us/client.ts', baseUrl: '/' },
  rpc: { output: './src/zoom-us/rpc.ts', parseResponse: true },
  swr: { output: './src/zoom-us/hooks/swr.ts' },
  'tanstack-query': { output: './src/zoom-us/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/zoom-us/hooks/preact-query.ts' },
  'solid-query': { output: './src/zoom-us/hooks/solid-query.ts' },
  'vue-query': { output: './src/zoom-us/hooks/vue-query.ts' },
  'svelte-query': { output: './src/zoom-us/hooks/svelte-query.ts' },
  'angular-query': { output: './src/zoom-us/hooks/angular-query.ts' },
  docs: {
    output: './src/zoom-us/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
