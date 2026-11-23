import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/signl4.com/v1/openapi.yaml',
  output: './src/signl4/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/signl4/types.ts' },
  client: { output: './src/signl4/client.ts', baseUrl: '/' },
  rpc: { output: './src/signl4/rpc.ts', parseResponse: true },
  swr: { output: './src/signl4/hooks/swr.ts' },
  'tanstack-query': { output: './src/signl4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/signl4/hooks/preact-query.ts' },
  'solid-query': { output: './src/signl4/hooks/solid-query.ts' },
  'vue-query': { output: './src/signl4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/signl4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/signl4/hooks/angular-query.ts' },
  docs: {
    output: './src/signl4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
