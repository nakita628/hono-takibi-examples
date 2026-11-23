import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/randomlovecraft.com/1.0/openapi.yaml',
  output: './src/randomlovecraft/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/randomlovecraft/types.ts' },
  client: { output: './src/randomlovecraft/client.ts', baseUrl: '/' },
  rpc: { output: './src/randomlovecraft/rpc.ts', parseResponse: true },
  swr: { output: './src/randomlovecraft/hooks/swr.ts' },
  'tanstack-query': { output: './src/randomlovecraft/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/randomlovecraft/hooks/preact-query.ts' },
  'solid-query': { output: './src/randomlovecraft/hooks/solid-query.ts' },
  'vue-query': { output: './src/randomlovecraft/hooks/vue-query.ts' },
  'svelte-query': { output: './src/randomlovecraft/hooks/svelte-query.ts' },
  'angular-query': { output: './src/randomlovecraft/hooks/angular-query.ts' },
  docs: {
    output: './src/randomlovecraft/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
