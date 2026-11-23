import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // dbt Cloud API v3, official OpenAPI spec:
  // https://github.com/dbt-labs/dbt-cloud-openapi-spec/blob/f2ab6fd6325f672d39a4f5d6d18536a646d97d27/openapi-v3.yaml
  input:
    'https://raw.githubusercontent.com/dbt-labs/dbt-cloud-openapi-spec/master/openapi-v3.yaml',
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
    baseUrl: 'https://cloud.getdbt.com',
  },
})
