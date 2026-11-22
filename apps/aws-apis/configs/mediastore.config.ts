import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediastore/2017-09-01/openapi.yaml',
  output: './src/mediastore/routes.ts',
  template: {},
  type: { output: './src/mediastore/types.ts' },
  client: { output: './src/mediastore/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediastore/rpc.ts', parseResponse: true },
  swr: { output: './src/mediastore/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediastore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediastore/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediastore/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediastore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediastore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediastore/hooks/angular-query.ts' },
  docs: {
    output: './src/mediastore/api.md',
    curl: true,
    baseUrl: 'https://mediastore.us-east-1.amazonaws.com',
  },
})
