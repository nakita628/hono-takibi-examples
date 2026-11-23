import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/capabilities/v1/feature_flags.openapi.yaml',
  output: './src/capabilities-v1-feature-flags/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/capabilities-v1-feature-flags/types.ts' },
  client: { output: './src/capabilities-v1-feature-flags/client.ts', baseUrl: '/' },
  rpc: { output: './src/capabilities-v1-feature-flags/rpc.ts', parseResponse: true },
  swr: { output: './src/capabilities-v1-feature-flags/hooks/swr.ts' },
  'tanstack-query': { output: './src/capabilities-v1-feature-flags/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/capabilities-v1-feature-flags/hooks/preact-query.ts' },
  'solid-query': { output: './src/capabilities-v1-feature-flags/hooks/solid-query.ts' },
  'vue-query': { output: './src/capabilities-v1-feature-flags/hooks/vue-query.ts' },
  'svelte-query': { output: './src/capabilities-v1-feature-flags/hooks/svelte-query.ts' },
  'angular-query': { output: './src/capabilities-v1-feature-flags/hooks/angular-query.ts' },
  docs: {
    output: './src/capabilities-v1-feature-flags/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
