import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/androidmanagement/v1/openapi.yaml',
  output: './src/androidmanagement/routes.ts',
  template: {},
  type: { output: './src/androidmanagement/types.ts' },
  client: { output: './src/androidmanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/androidmanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/androidmanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/androidmanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/androidmanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/androidmanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/androidmanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/androidmanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/androidmanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/androidmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
