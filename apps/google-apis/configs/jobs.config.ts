import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/jobs/v3p1beta1/openapi.yaml',
  output: './src/jobs/routes.ts',
  template: {},
  type: { output: './src/jobs/types.ts' },
  client: { output: './src/jobs/client.ts', baseUrl: '/' },
  rpc: { output: './src/jobs/rpc.ts', parseResponse: true },
  swr: { output: './src/jobs/hooks/swr.ts' },
  'tanstack-query': { output: './src/jobs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jobs/hooks/preact-query.ts' },
  'solid-query': { output: './src/jobs/hooks/solid-query.ts' },
  'vue-query': { output: './src/jobs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jobs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jobs/hooks/angular-query.ts' },
  docs: {
    output: './src/jobs/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
