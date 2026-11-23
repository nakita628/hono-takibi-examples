import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/config/2014-11-12/openapi.yaml',
  output: './src/config/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/config/types.ts' },
  client: { output: './src/config/client.ts', baseUrl: '/' },
  rpc: { output: './src/config/rpc.ts', parseResponse: true },
  swr: { output: './src/config/hooks/swr.ts' },
  'tanstack-query': { output: './src/config/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/config/hooks/preact-query.ts' },
  'solid-query': { output: './src/config/hooks/solid-query.ts' },
  'vue-query': { output: './src/config/hooks/vue-query.ts' },
  'svelte-query': { output: './src/config/hooks/svelte-query.ts' },
  'angular-query': { output: './src/config/hooks/angular-query.ts' },
  docs: {
    output: './src/config/api.md',
    curl: true,
    baseUrl: 'https://config.us-east-1.amazonaws.com',
  },
})
