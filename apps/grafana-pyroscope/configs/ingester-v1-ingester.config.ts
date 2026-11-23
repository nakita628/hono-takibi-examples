import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/ingester/v1/ingester.openapi.yaml',
  output: './src/ingester-v1-ingester/routes.ts',
  template: {},
  type: { output: './src/ingester-v1-ingester/types.ts' },
  client: { output: './src/ingester-v1-ingester/client.ts', baseUrl: '/' },
  rpc: { output: './src/ingester-v1-ingester/rpc.ts', parseResponse: true },
  swr: { output: './src/ingester-v1-ingester/hooks/swr.ts' },
  'tanstack-query': { output: './src/ingester-v1-ingester/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ingester-v1-ingester/hooks/preact-query.ts' },
  'solid-query': { output: './src/ingester-v1-ingester/hooks/solid-query.ts' },
  'vue-query': { output: './src/ingester-v1-ingester/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ingester-v1-ingester/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ingester-v1-ingester/hooks/angular-query.ts' },
  docs: {
    output: './src/ingester-v1-ingester/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
