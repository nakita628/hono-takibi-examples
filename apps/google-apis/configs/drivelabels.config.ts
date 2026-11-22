import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/drivelabels/v2beta/openapi.yaml',
  output: './src/drivelabels/routes.ts',
  template: {},
  type: { output: './src/drivelabels/types.ts' },
  client: { output: './src/drivelabels/client.ts', baseUrl: '/' },
  rpc: { output: './src/drivelabels/rpc.ts', parseResponse: true },
  swr: { output: './src/drivelabels/hooks/swr.ts' },
  'tanstack-query': { output: './src/drivelabels/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/drivelabels/hooks/preact-query.ts' },
  'solid-query': { output: './src/drivelabels/hooks/solid-query.ts' },
  'vue-query': { output: './src/drivelabels/hooks/vue-query.ts' },
  'svelte-query': { output: './src/drivelabels/hooks/svelte-query.ts' },
  'angular-query': { output: './src/drivelabels/hooks/angular-query.ts' },
  docs: {
    output: './src/drivelabels/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
