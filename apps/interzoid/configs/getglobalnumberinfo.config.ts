import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getglobalnumberinfo/1.0.0/openapi.yaml',
  output: './src/getglobalnumberinfo/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getglobalnumberinfo/types.ts' },
  client: { output: './src/getglobalnumberinfo/client.ts', baseUrl: '/' },
  rpc: { output: './src/getglobalnumberinfo/rpc.ts', parseResponse: true },
  swr: { output: './src/getglobalnumberinfo/hooks/swr.ts' },
  'tanstack-query': { output: './src/getglobalnumberinfo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getglobalnumberinfo/hooks/preact-query.ts' },
  'solid-query': { output: './src/getglobalnumberinfo/hooks/solid-query.ts' },
  'vue-query': { output: './src/getglobalnumberinfo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getglobalnumberinfo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getglobalnumberinfo/hooks/angular-query.ts' },
  docs: {
    output: './src/getglobalnumberinfo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
