import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clever-cloud.com/1.0.0/openapi.yaml',
  output: './src/clever-cloud/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/clever-cloud/types.ts' },
  client: { output: './src/clever-cloud/client.ts', baseUrl: '/' },
  rpc: { output: './src/clever-cloud/rpc.ts', parseResponse: true },
  swr: { output: './src/clever-cloud/hooks/swr.ts' },
  'tanstack-query': { output: './src/clever-cloud/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clever-cloud/hooks/preact-query.ts' },
  'solid-query': { output: './src/clever-cloud/hooks/solid-query.ts' },
  'vue-query': { output: './src/clever-cloud/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clever-cloud/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clever-cloud/hooks/angular-query.ts' },
  docs: {
    output: './src/clever-cloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
