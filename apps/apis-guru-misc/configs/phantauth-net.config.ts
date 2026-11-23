import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/phantauth.net/1.0.0/openapi.yaml',
  output: './src/phantauth-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/phantauth-net/types.ts' },
  client: { output: './src/phantauth-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/phantauth-net/rpc.ts', parseResponse: true },
  swr: { output: './src/phantauth-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/phantauth-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/phantauth-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/phantauth-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/phantauth-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/phantauth-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/phantauth-net/hooks/angular-query.ts' },
  docs: {
    output: './src/phantauth-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
