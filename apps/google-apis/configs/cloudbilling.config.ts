import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudbilling/v1beta/openapi.yaml',
  output: './src/cloudbilling/routes.ts',
  template: {},
  type: { output: './src/cloudbilling/types.ts' },
  client: { output: './src/cloudbilling/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudbilling/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudbilling/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudbilling/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudbilling/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudbilling/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudbilling/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudbilling/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudbilling/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudbilling/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
