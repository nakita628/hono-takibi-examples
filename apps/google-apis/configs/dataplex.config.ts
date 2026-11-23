import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataplex/v1/openapi.yaml',
  output: './src/dataplex/routes.ts',
  template: {},
  type: { output: './src/dataplex/types.ts' },
  client: { output: './src/dataplex/client.ts', baseUrl: '/' },
  rpc: { output: './src/dataplex/rpc.ts', parseResponse: true },
  swr: { output: './src/dataplex/hooks/swr.ts' },
  'tanstack-query': { output: './src/dataplex/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dataplex/hooks/preact-query.ts' },
  'solid-query': { output: './src/dataplex/hooks/solid-query.ts' },
  'vue-query': { output: './src/dataplex/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dataplex/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dataplex/hooks/angular-query.ts' },
  docs: {
    output: './src/dataplex/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
