import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getglobaltime/1.0.0/openapi.yaml',
  output: './src/getglobaltime/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getglobaltime/types.ts' },
  client: { output: './src/getglobaltime/client.ts', baseUrl: '/' },
  rpc: { output: './src/getglobaltime/rpc.ts', parseResponse: true },
  swr: { output: './src/getglobaltime/hooks/swr.ts' },
  'tanstack-query': { output: './src/getglobaltime/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getglobaltime/hooks/preact-query.ts' },
  'solid-query': { output: './src/getglobaltime/hooks/solid-query.ts' },
  'vue-query': { output: './src/getglobaltime/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getglobaltime/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getglobaltime/hooks/angular-query.ts' },
  docs: {
    output: './src/getglobaltime/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
