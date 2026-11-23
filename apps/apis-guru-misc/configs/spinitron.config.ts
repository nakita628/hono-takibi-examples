import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spinitron.com/1.0.0/openapi.yaml',
  output: './src/spinitron/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/spinitron/types.ts' },
  client: { output: './src/spinitron/client.ts', baseUrl: '/' },
  rpc: { output: './src/spinitron/rpc.ts', parseResponse: true },
  swr: { output: './src/spinitron/hooks/swr.ts' },
  'tanstack-query': { output: './src/spinitron/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/spinitron/hooks/preact-query.ts' },
  'solid-query': { output: './src/spinitron/hooks/solid-query.ts' },
  'vue-query': { output: './src/spinitron/hooks/vue-query.ts' },
  'svelte-query': { output: './src/spinitron/hooks/svelte-query.ts' },
  'angular-query': { output: './src/spinitron/hooks/angular-query.ts' },
  docs: {
    output: './src/spinitron/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
