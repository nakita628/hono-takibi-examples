import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lookoutvision/2020-11-20/openapi.yaml',
  output: './src/lookoutvision/routes.ts',
  template: {},
  type: { output: './src/lookoutvision/types.ts' },
  client: { output: './src/lookoutvision/client.ts', baseUrl: '/' },
  rpc: { output: './src/lookoutvision/rpc.ts', parseResponse: true },
  swr: { output: './src/lookoutvision/hooks/swr.ts' },
  'tanstack-query': { output: './src/lookoutvision/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lookoutvision/hooks/preact-query.ts' },
  'solid-query': { output: './src/lookoutvision/hooks/solid-query.ts' },
  'vue-query': { output: './src/lookoutvision/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lookoutvision/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lookoutvision/hooks/angular-query.ts' },
  docs: {
    output: './src/lookoutvision/api.md',
    curl: true,
    baseUrl: 'https://lookoutvision.us-east-1.amazonaws.com',
  },
})
