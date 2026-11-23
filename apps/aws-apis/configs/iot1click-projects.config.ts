import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot1click-projects/2018-05-14/openapi.yaml',
  output: './src/iot1click-projects/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iot1click-projects/types.ts' },
  client: { output: './src/iot1click-projects/client.ts', baseUrl: '/' },
  rpc: { output: './src/iot1click-projects/rpc.ts', parseResponse: true },
  swr: { output: './src/iot1click-projects/hooks/swr.ts' },
  'tanstack-query': { output: './src/iot1click-projects/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iot1click-projects/hooks/preact-query.ts' },
  'solid-query': { output: './src/iot1click-projects/hooks/solid-query.ts' },
  'vue-query': { output: './src/iot1click-projects/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iot1click-projects/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iot1click-projects/hooks/angular-query.ts' },
  docs: {
    output: './src/iot1click-projects/api.md',
    curl: true,
    baseUrl: 'https://iot1click-projects.us-east-1.amazonaws.com',
  },
})
