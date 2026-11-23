import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/jobposting/1.0.0/openapi.yaml',
  output: './src/jobposting/routes.ts',
  template: {},
  type: { output: './src/jobposting/types.ts' },
  client: { output: './src/jobposting/client.ts', baseUrl: '/' },
  rpc: { output: './src/jobposting/rpc.ts', parseResponse: true },
  swr: { output: './src/jobposting/hooks/swr.ts' },
  'tanstack-query': { output: './src/jobposting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jobposting/hooks/preact-query.ts' },
  'solid-query': { output: './src/jobposting/hooks/solid-query.ts' },
  'vue-query': { output: './src/jobposting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jobposting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jobposting/hooks/angular-query.ts' },
  docs: {
    output: './src/jobposting/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
