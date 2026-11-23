import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/factchecktools/v1alpha1/openapi.yaml',
  output: './src/factchecktools/routes.ts',
  template: {},
  type: { output: './src/factchecktools/types.ts' },
  client: { output: './src/factchecktools/client.ts', baseUrl: '/' },
  rpc: { output: './src/factchecktools/rpc.ts', parseResponse: true },
  swr: { output: './src/factchecktools/hooks/swr.ts' },
  'tanstack-query': { output: './src/factchecktools/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/factchecktools/hooks/preact-query.ts' },
  'solid-query': { output: './src/factchecktools/hooks/solid-query.ts' },
  'vue-query': { output: './src/factchecktools/hooks/vue-query.ts' },
  'svelte-query': { output: './src/factchecktools/hooks/svelte-query.ts' },
  'angular-query': { output: './src/factchecktools/hooks/angular-query.ts' },
  docs: {
    output: './src/factchecktools/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
