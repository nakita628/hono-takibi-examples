import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sasportal/v1alpha1/openapi.yaml',
  output: './src/sasportal/routes.ts',
  template: {},
  type: { output: './src/sasportal/types.ts' },
  client: { output: './src/sasportal/client.ts', baseUrl: '/' },
  rpc: { output: './src/sasportal/rpc.ts', parseResponse: true },
  swr: { output: './src/sasportal/hooks/swr.ts' },
  'tanstack-query': { output: './src/sasportal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sasportal/hooks/preact-query.ts' },
  'solid-query': { output: './src/sasportal/hooks/solid-query.ts' },
  'vue-query': { output: './src/sasportal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sasportal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sasportal/hooks/angular-query.ts' },
  docs: {
    output: './src/sasportal/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
