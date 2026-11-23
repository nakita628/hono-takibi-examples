import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Portainer CE API, official OpenAPI spec:
  // https://github.com/portainer/portainer/blob/2d1ea91625bfc572c7a57432547a787c498d9a26/api/docs/openapi.yaml
  input:
    'https://raw.githubusercontent.com/portainer/portainer/release/2.45/api/docs/openapi.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
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
    baseUrl: 'https://localhost:9443/api',
  },
})
