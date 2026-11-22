import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codeguruprofiler/2019-07-18/openapi.yaml',
  output: './src/codeguruprofiler/routes.ts',
  template: {},
  type: { output: './src/codeguruprofiler/types.ts' },
  client: { output: './src/codeguruprofiler/client.ts', baseUrl: '/' },
  rpc: { output: './src/codeguruprofiler/rpc.ts', parseResponse: true },
  swr: { output: './src/codeguruprofiler/hooks/swr.ts' },
  'tanstack-query': { output: './src/codeguruprofiler/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codeguruprofiler/hooks/preact-query.ts' },
  'solid-query': { output: './src/codeguruprofiler/hooks/solid-query.ts' },
  'vue-query': { output: './src/codeguruprofiler/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codeguruprofiler/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codeguruprofiler/hooks/angular-query.ts' },
  docs: {
    output: './src/codeguruprofiler/api.md',
    curl: true,
    baseUrl: 'https://codeguruprofiler.us-east-1.amazonaws.com',
  },
})
