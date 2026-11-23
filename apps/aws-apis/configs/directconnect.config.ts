import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/directconnect/2012-10-25/openapi.yaml',
  output: './src/directconnect/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/directconnect/types.ts' },
  client: { output: './src/directconnect/client.ts', baseUrl: '/' },
  rpc: { output: './src/directconnect/rpc.ts', parseResponse: true },
  swr: { output: './src/directconnect/hooks/swr.ts' },
  'tanstack-query': { output: './src/directconnect/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/directconnect/hooks/preact-query.ts' },
  'solid-query': { output: './src/directconnect/hooks/solid-query.ts' },
  'vue-query': { output: './src/directconnect/hooks/vue-query.ts' },
  'svelte-query': { output: './src/directconnect/hooks/svelte-query.ts' },
  'angular-query': { output: './src/directconnect/hooks/angular-query.ts' },
  docs: {
    output: './src/directconnect/api.md',
    curl: true,
    baseUrl: 'https://directconnect.us-east-1.amazonaws.com',
  },
})
