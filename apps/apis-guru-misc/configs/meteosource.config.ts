import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meteosource.com/v1/openapi.yaml',
  output: './src/meteosource/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/meteosource/types.ts' },
  client: { output: './src/meteosource/client.ts', baseUrl: '/' },
  rpc: { output: './src/meteosource/rpc.ts', parseResponse: true },
  swr: { output: './src/meteosource/hooks/swr.ts' },
  'tanstack-query': { output: './src/meteosource/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meteosource/hooks/preact-query.ts' },
  'solid-query': { output: './src/meteosource/hooks/solid-query.ts' },
  'vue-query': { output: './src/meteosource/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meteosource/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meteosource/hooks/angular-query.ts' },
  docs: {
    output: './src/meteosource/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
