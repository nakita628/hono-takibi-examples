import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/orbit.love/v1/openapi.yaml',
  output: './src/orbit-love/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/orbit-love/types.ts' },
  client: { output: './src/orbit-love/client.ts', baseUrl: '/' },
  rpc: { output: './src/orbit-love/rpc.ts', parseResponse: true },
  swr: { output: './src/orbit-love/hooks/swr.ts' },
  'tanstack-query': { output: './src/orbit-love/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orbit-love/hooks/preact-query.ts' },
  'solid-query': { output: './src/orbit-love/hooks/solid-query.ts' },
  'vue-query': { output: './src/orbit-love/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orbit-love/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orbit-love/hooks/angular-query.ts' },
  docs: {
    output: './src/orbit-love/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
