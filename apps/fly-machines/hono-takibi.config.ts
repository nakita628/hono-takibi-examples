import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Fly.io Machines API, official OpenAPI spec:
  // https://github.com/superfly/fly-openapi-sdk/blob/6986a440d86aa973e4213cc1b5d6e14dbbb06759/go/api/openapi.yaml
  input:
    'https://raw.githubusercontent.com/superfly/fly-openapi-sdk/main/go/api/openapi.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.machines.dev/v1',
  },
})
