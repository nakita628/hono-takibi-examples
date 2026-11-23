import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/emr-containers/2020-10-01/openapi.yaml',
  output: './src/emr-containers/routes.ts',
  template: {},
  type: { output: './src/emr-containers/types.ts' },
  client: { output: './src/emr-containers/client.ts', baseUrl: '/' },
  rpc: { output: './src/emr-containers/rpc.ts', parseResponse: true },
  swr: { output: './src/emr-containers/hooks/swr.ts' },
  'tanstack-query': { output: './src/emr-containers/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/emr-containers/hooks/preact-query.ts' },
  'solid-query': { output: './src/emr-containers/hooks/solid-query.ts' },
  'vue-query': { output: './src/emr-containers/hooks/vue-query.ts' },
  'svelte-query': { output: './src/emr-containers/hooks/svelte-query.ts' },
  'angular-query': { output: './src/emr-containers/hooks/angular-query.ts' },
  docs: {
    output: './src/emr-containers/api.md',
    curl: true,
    baseUrl: 'https://emr-containers.us-east-1.amazonaws.com',
  },
})
