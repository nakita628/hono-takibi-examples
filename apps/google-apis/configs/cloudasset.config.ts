import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudasset/v1p7beta1/openapi.yaml',
  output: './src/cloudasset/routes.ts',
  template: {},
  type: { output: './src/cloudasset/types.ts' },
  client: { output: './src/cloudasset/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudasset/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudasset/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudasset/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudasset/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudasset/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudasset/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudasset/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudasset/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudasset/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
