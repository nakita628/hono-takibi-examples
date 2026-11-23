import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/greengrass/2017-06-07/openapi.yaml',
  output: './src/greengrass/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/greengrass/types.ts' },
  client: { output: './src/greengrass/client.ts', baseUrl: '/' },
  rpc: { output: './src/greengrass/rpc.ts', parseResponse: true },
  swr: { output: './src/greengrass/hooks/swr.ts' },
  'tanstack-query': { output: './src/greengrass/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/greengrass/hooks/preact-query.ts' },
  'solid-query': { output: './src/greengrass/hooks/solid-query.ts' },
  'vue-query': { output: './src/greengrass/hooks/vue-query.ts' },
  'svelte-query': { output: './src/greengrass/hooks/svelte-query.ts' },
  'angular-query': { output: './src/greengrass/hooks/angular-query.ts' },
  docs: {
    output: './src/greengrass/api.md',
    curl: true,
    baseUrl: 'https://greengrass.us-east-1.amazonaws.com',
  },
})
