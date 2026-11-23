import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/schemas/2019-12-02/openapi.yaml',
  output: './src/schemas/routes.ts',
  template: {},
  type: { output: './src/schemas/types.ts' },
  client: { output: './src/schemas/client.ts', baseUrl: '/' },
  rpc: { output: './src/schemas/rpc.ts', parseResponse: true },
  swr: { output: './src/schemas/hooks/swr.ts' },
  'tanstack-query': { output: './src/schemas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/schemas/hooks/preact-query.ts' },
  'solid-query': { output: './src/schemas/hooks/solid-query.ts' },
  'vue-query': { output: './src/schemas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/schemas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/schemas/hooks/angular-query.ts' },
  docs: {
    output: './src/schemas/api.md',
    curl: true,
    baseUrl: 'https://schemas.us-east-1.amazonaws.com',
  },
})
