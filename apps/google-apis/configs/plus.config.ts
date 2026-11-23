import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/plus/v1/openapi.yaml',
  output: './src/plus/routes.ts',
  template: {},
  type: { output: './src/plus/types.ts' },
  client: { output: './src/plus/client.ts', baseUrl: '/' },
  rpc: { output: './src/plus/rpc.ts', parseResponse: true },
  swr: { output: './src/plus/hooks/swr.ts' },
  'tanstack-query': { output: './src/plus/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/plus/hooks/preact-query.ts' },
  'solid-query': { output: './src/plus/hooks/solid-query.ts' },
  'vue-query': { output: './src/plus/hooks/vue-query.ts' },
  'svelte-query': { output: './src/plus/hooks/svelte-query.ts' },
  'angular-query': { output: './src/plus/hooks/angular-query.ts' },
  docs: {
    output: './src/plus/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
