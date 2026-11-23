import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/staging-ecotaco.com/1.0.0/openapi.yaml',
  output: './src/staging-ecotaco/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/staging-ecotaco/types.ts' },
  client: { output: './src/staging-ecotaco/client.ts', baseUrl: '/' },
  rpc: { output: './src/staging-ecotaco/rpc.ts', parseResponse: true },
  swr: { output: './src/staging-ecotaco/hooks/swr.ts' },
  'tanstack-query': { output: './src/staging-ecotaco/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/staging-ecotaco/hooks/preact-query.ts' },
  'solid-query': { output: './src/staging-ecotaco/hooks/solid-query.ts' },
  'vue-query': { output: './src/staging-ecotaco/hooks/vue-query.ts' },
  'svelte-query': { output: './src/staging-ecotaco/hooks/svelte-query.ts' },
  'angular-query': { output: './src/staging-ecotaco/hooks/angular-query.ts' },
  docs: {
    output: './src/staging-ecotaco/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
