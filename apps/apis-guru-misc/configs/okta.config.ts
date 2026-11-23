import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/okta.local/1.0.0/openapi.yaml',
  output: './src/okta/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/okta/types.ts' },
  client: { output: './src/okta/client.ts', baseUrl: '/' },
  rpc: { output: './src/okta/rpc.ts', parseResponse: true },
  swr: { output: './src/okta/hooks/swr.ts' },
  'tanstack-query': { output: './src/okta/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/okta/hooks/preact-query.ts' },
  'solid-query': { output: './src/okta/hooks/solid-query.ts' },
  'vue-query': { output: './src/okta/hooks/vue-query.ts' },
  'svelte-query': { output: './src/okta/hooks/svelte-query.ts' },
  'angular-query': { output: './src/okta/hooks/angular-query.ts' },
  docs: {
    output: './src/okta/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
