import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/proxy/9.3.0/openapi.yaml',
  output: './src/proxy/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/proxy/types.ts' },
  client: { output: './src/proxy/client.ts', baseUrl: '/' },
  rpc: { output: './src/proxy/rpc.ts', parseResponse: true },
  swr: { output: './src/proxy/hooks/swr.ts' },
  'tanstack-query': { output: './src/proxy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/proxy/hooks/preact-query.ts' },
  'solid-query': { output: './src/proxy/hooks/solid-query.ts' },
  'vue-query': { output: './src/proxy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/proxy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/proxy/hooks/angular-query.ts' },
  docs: {
    output: './src/proxy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
