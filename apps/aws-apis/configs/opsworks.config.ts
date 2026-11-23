import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/opsworks/2013-02-18/openapi.yaml',
  output: './src/opsworks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/opsworks/types.ts' },
  client: { output: './src/opsworks/client.ts', baseUrl: '/' },
  rpc: { output: './src/opsworks/rpc.ts', parseResponse: true },
  swr: { output: './src/opsworks/hooks/swr.ts' },
  'tanstack-query': { output: './src/opsworks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/opsworks/hooks/preact-query.ts' },
  'solid-query': { output: './src/opsworks/hooks/solid-query.ts' },
  'vue-query': { output: './src/opsworks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/opsworks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/opsworks/hooks/angular-query.ts' },
  docs: {
    output: './src/opsworks/api.md',
    curl: true,
    baseUrl: 'https://opsworks.us-east-1.amazonaws.com',
  },
})
