import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/status/v1/status.openapi.yaml',
  output: './src/status-v1-status/routes.ts',
  template: {},
  type: { output: './src/status-v1-status/types.ts' },
  client: { output: './src/status-v1-status/client.ts', baseUrl: '/' },
  rpc: { output: './src/status-v1-status/rpc.ts', parseResponse: true },
  swr: { output: './src/status-v1-status/hooks/swr.ts' },
  'tanstack-query': { output: './src/status-v1-status/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/status-v1-status/hooks/preact-query.ts' },
  'solid-query': { output: './src/status-v1-status/hooks/solid-query.ts' },
  'vue-query': { output: './src/status-v1-status/hooks/vue-query.ts' },
  'svelte-query': { output: './src/status-v1-status/hooks/svelte-query.ts' },
  'angular-query': { output: './src/status-v1-status/hooks/angular-query.ts' },
  docs: {
    output: './src/status-v1-status/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
