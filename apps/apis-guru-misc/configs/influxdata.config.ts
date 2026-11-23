import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/influxdata.com/2.0.0/openapi.yaml',
  output: './src/influxdata/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/influxdata/types.ts' },
  client: { output: './src/influxdata/client.ts', baseUrl: '/' },
  rpc: { output: './src/influxdata/rpc.ts', parseResponse: true },
  swr: { output: './src/influxdata/hooks/swr.ts' },
  'tanstack-query': { output: './src/influxdata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/influxdata/hooks/preact-query.ts' },
  'solid-query': { output: './src/influxdata/hooks/solid-query.ts' },
  'vue-query': { output: './src/influxdata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/influxdata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/influxdata/hooks/angular-query.ts' },
  docs: {
    output: './src/influxdata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
