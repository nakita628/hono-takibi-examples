import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/reliancegeneral/3.0.0/openapi.yaml',
  output: './src/reliancegeneral/routes.ts',
  template: {},
  type: { output: './src/reliancegeneral/types.ts' },
  client: { output: './src/reliancegeneral/client.ts', baseUrl: '/' },
  rpc: { output: './src/reliancegeneral/rpc.ts', parseResponse: true },
  swr: { output: './src/reliancegeneral/hooks/swr.ts' },
  'tanstack-query': { output: './src/reliancegeneral/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reliancegeneral/hooks/preact-query.ts' },
  'solid-query': { output: './src/reliancegeneral/hooks/solid-query.ts' },
  'vue-query': { output: './src/reliancegeneral/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reliancegeneral/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reliancegeneral/hooks/angular-query.ts' },
  docs: {
    output: './src/reliancegeneral/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
