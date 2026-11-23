import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/opsworkscm/2016-11-01/openapi.yaml',
  output: './src/opsworkscm/routes.ts',
  template: {},
  type: { output: './src/opsworkscm/types.ts' },
  client: { output: './src/opsworkscm/client.ts', baseUrl: '/' },
  rpc: { output: './src/opsworkscm/rpc.ts', parseResponse: true },
  swr: { output: './src/opsworkscm/hooks/swr.ts' },
  'tanstack-query': { output: './src/opsworkscm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/opsworkscm/hooks/preact-query.ts' },
  'solid-query': { output: './src/opsworkscm/hooks/solid-query.ts' },
  'vue-query': { output: './src/opsworkscm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/opsworkscm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/opsworkscm/hooks/angular-query.ts' },
  docs: {
    output: './src/opsworkscm/api.md',
    curl: true,
    baseUrl: 'https://opsworkscm.us-east-1.amazonaws.com',
  },
})
