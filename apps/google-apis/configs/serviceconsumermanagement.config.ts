import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/serviceconsumermanagement/v1beta1/openapi.yaml',
  output: './src/serviceconsumermanagement/routes.ts',
  template: {},
  type: { output: './src/serviceconsumermanagement/types.ts' },
  client: { output: './src/serviceconsumermanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/serviceconsumermanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/serviceconsumermanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/serviceconsumermanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/serviceconsumermanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/serviceconsumermanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/serviceconsumermanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/serviceconsumermanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/serviceconsumermanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/serviceconsumermanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
